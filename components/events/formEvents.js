import { getOrders, createOrder, editOrder } from '../../api/orderData';
import { showOrders } from '../../pages/viewOrders';

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
  });
};

export default formEvents;
