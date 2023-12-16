import { getOrders } from '../../api/orderData';
import { showOrders } from '../../pages/viewOrders';
import { signOut } from '../../utils/auth';
// import { getItem } from '../../api/itemData';

// navigation events
const navEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#orders').addEventListener('click', () => {
    console.warn('CLICKED ORDER BUTTON');
    getOrders().then(showOrders);
  });

  document.querySelector('#add-button').addEventListener('click', () => {
    console.warn('CLICKED CREATE ORDER BUTTON');
  });

  // document.querySelector('#order-details-btn').addEventListener('click', () => {
  //   getItem().then(showItems);
  // });
};

export default navEvents;
