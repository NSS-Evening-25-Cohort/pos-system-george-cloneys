import { createItem, getItem, updateItem } from '../../api/itemData';
import { getOrders, createOrder, editOrder } from '../../api/orderData';
import { showOrders } from '../../pages/viewOrders';
import { showItems } from '../../pages/orderDetails';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-order')) {
      const payload = {
        orderName: document.querySelector('#orderName').value,
        phoneNumber: document.querySelector('#phoneNumber').value,
        email: document.querySelector('#email').value,
        order_type: document.querySelector('input[name="flexRadioDefault"]:checked').value,
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

    if (e.target.id.includes('submit-item')) {
      const payload = {
        item_name: document.querySelector('#items-name').value,
        item_price: document.querySelector('#items-price').value
      };
      createItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateItem(patchPayload).then(() => {
          getItem().then(showItems);
        });
      });
    }

    if (e.target.id.includes('edit-item')) {
      console.warn('edit item clicked');
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        item_name: document.querySelector('#items-name').value,
        item_price: document.querySelector('#items-price').value,
        firebaseKey
      };

      updateItem(payload).then(() => {
        getItem().then(showItems);
      });
    }
  });
};

export default formEvents;
