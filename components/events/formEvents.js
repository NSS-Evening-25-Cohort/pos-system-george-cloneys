import { createItem, updateItem } from '../../api/itemData';
import {
  getOrders, createOrder, editOrder, getOrderItems
} from '../../api/orderData';
import { showOrders } from '../../pages/viewOrders';
import { showItems } from '../../pages/orderDetails';
import revenuePage from '../../pages/revenue';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-order')) {
      const payload = {
        orderName: document.querySelector('#orderName').value,
        phoneNumber: document.querySelector('#phoneNumber').value,
        email: document.querySelector('#email').value,
        order_type: document.querySelector('input[name="flexRadioDefault"]:checked').value,
        status: 'Open'
      };
      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        editOrder(patchPayload).then(() => {
          getOrders().then(showOrders);
        });
      });
    }

    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        orderName: document.querySelector('#orderName').value,
        phoneNumber: document.querySelector('#phoneNumber').value,
        email: document.querySelector('#email').value,
        order_type: document.querySelector('input[name="flexRadioDefault"]:checked').value,
        firebaseKey,
      };

      editOrder(payload).then(() => {
        getOrders().then(showOrders);
      });
    }

    if (e.target.id.includes('add-item')) {
      const [, orderId] = e.target.id.split('--');
      const payload = {
        item_name: document.querySelector('#items-name').value,
        item_price: document.querySelector('#items-price').value,
        order_id: orderId
      };
      createItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateItem(patchPayload).then(() => {
          getOrderItems(orderId).then((items) => showItems(items, orderId));
        });
      });
    }

    if (e.target.id.includes('edit-item-form')) {
      const [, itemId, orderId] = e.target.id.split('--');
      const payload = {
        item_name: document.querySelector('#items-name').value,
        item_price: document.querySelector('#items-price').value,
        firebaseKey: itemId
      };

      updateItem(payload).then(() => {
        getOrderItems(orderId).then((items) => showItems(items, orderId));
      });
    }

    if (e.target.id.includes('close-order-form')) {
      const [, orderId] = e.target.id.split('--');
      const payload = {
        payment_type: document.querySelector('#payment-type').value,
        tip_amount: document.querySelector('#tip-amount').value,
        status: 'Closed',
        firebaseKey: orderId
      };

      editOrder(payload).then(() => {
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
      });
    }
  });
};

export default formEvents;
