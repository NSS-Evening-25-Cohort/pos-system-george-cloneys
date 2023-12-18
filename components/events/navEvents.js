import { getOrders } from '../../api/orderData';
import { showOrders } from '../../pages/viewOrders';
import { signOut } from '../../utils/auth';
// import { getItem } from '../../api/itemData';

// navigation events
const navEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#orders').addEventListener('click', () => {
    getOrders().then(showOrders);
  });

  document.querySelector('#add-button').addEventListener('click', () => {
  });
};

export default navEvents;
