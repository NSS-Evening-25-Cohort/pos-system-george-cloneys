import {
  getOrders, getSingleOrder, getOrderItems
} from '../../api/orderData';
import addOrderForm from '../forms/createOrder';
import { getSingleItem, deleteSingleItem } from '../../api/itemData';
import { showItems } from '../../pages/orderDetails';
import addItemForm from '../forms/addItemForm';
import { showOrders } from '../../pages/viewOrders';
import deleteOrderWithItems from '../../api/mergedData';
import revenuePage from '../../pages/revenue';
import homePage from '../../pages/homePage';
import closeOrderForm from '../forms/closeOrderForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrderWithItems(firebaseKey).then(() => {
          getOrders().then(showOrders);
        });
      }
    }
    if (e.target.id.includes('view-orders-btn1')) {
      getOrders().then(showOrders);
    }

    if (e.target.id.includes('create-orders-btn2')) {
      addOrderForm();
    }

    if (e.target.id.includes('view-revenue-btn3')) {
      getOrders().then((orders) => {
        // Map closed orders to an array of promises returned by the getOrderItems call.
        const getOrderItemsPromises = orders
          .filter((order) => order.status === 'Closed')
          .map((order) => getOrderItems(order.firebaseKey)
            .then((orderItems) => Promise.resolve({ ...order, items: orderItems })));

        // Wait until all calls to database have completed
        Promise.all(getOrderItemsPromises)
          // Display the revenue page with the orders and their items
          .then((ordersWithItems) => revenuePage(ordersWithItems));
      });
    }
    if (e.target.id.includes('home')) {
      homePage();
    }

    if (e.target.id.includes('add-order-btn')) {
      addOrderForm();
    }

    if (e.target.id.includes('close-order-btn')) {
      const [, orderId] = e.target.id.split('--');
      closeOrderForm(orderId);
    }

    if (e.target.id.includes('edit-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleOrder(firebaseKey).then((orderObj) => addOrderForm(orderObj));
    }

    if (e.target.id.includes('add-item-btn')) {
      const [, orderId] = e.target.id.split('--');
      // clearDom();
      addItemForm({}, orderId);
    }

    // DOM EVENTS FOR ITEMS
    // ADD CLICK EVENT FOR EDIT/UPDATE ITEM
    if (e.target.id.includes('edit-item-btn')) {
      const [, itemId] = e.target.id.split('--');
      getSingleItem(itemId).then((itemObj) => addItemForm(itemObj, itemObj.order_id));
    }
    // ADD CLICK EVENT FOR DELETE ITEM
    if (e.target.id.includes('delete-item-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, itemId, orderId] = e.target.id.split('--');

        deleteSingleItem(itemId).then(() => {
          getOrderItems(orderId).then(showItems);
        });
      }
    }
    if (e.target.id.includes('order-details-btn')) {
      const [, orderId, orderStatus] = e.target.id.split('--');
      getOrderItems(orderId).then((items) => showItems(items, orderId, orderStatus));
    }
  });
};
export default domEvents;
