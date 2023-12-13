import { getOrders, getSingleOrder, deleteOrder } from '../../api/orderData';
import { showOrders } from '../../pages/vocab';
import addVocabForm from '../forms/addWord';

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

      getSingleOrder(firebaseKey).then((orderObj) => addVocabForm(orderObj));
    }

    //DOM EVENTS FOR ITEMS
    // ADD CLICK EVENT FOR EDIT/UPDATE ITEM
    // ADD CLICK EVENT FOR DELETE ITEM
    // ADD CLICK EVENT FOR ADD/SUBMIT ITEM
  });
};

export default domEvents;
