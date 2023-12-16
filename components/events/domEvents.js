import {
  getOrders, getSingleOrder, deleteOrder, getOrderItems
} from '../../api/orderData';
import { showOrders } from '../../pages/order';
import addOrderForm from '../forms/createOrder';
import { getItem, getSingleItem, deleteItem } from '../../api/itemData';
import { showItems } from '../../pages/item';
import addItemForm from '../forms/addItemForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrder(firebaseKey).then(() => {
          getOrders().then(showOrders);
        });
      }
    }

    if (e.target.id.includes('add-order-btn')) {
      addOrderForm();
    }

    if (e.target.id.includes('edit-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleOrder(firebaseKey).then((orderObj) => addOrderForm(orderObj));
    }

    // DOM EVENTS FOR ITEMS
    // ADD CLICK EVENT FOR EDIT/UPDATE ITEM
    if (e.target.id.includes('update-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleItem(firebaseKey).then((itemObj) => addItemForm(itemObj));
    }
    // ADD CLICK EVENT FOR DELETE ITEM
    if (e.target.id.includes('delete-item-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteItem(firebaseKey).then(() => {
          getItem().then(showItems);
        });
      }
    }
    if (e.target.id.includes('order-details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderItems(firebaseKey).then(showItems);
    }
  });
};
export default domEvents;
