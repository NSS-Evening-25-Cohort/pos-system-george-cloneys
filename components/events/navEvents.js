import { getOrders } from '../../api/orderData';
import { showOrders } from '../../pages/viewOrders';
import { signOut } from '../../utils/auth';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#orders').addEventListener('click', () => {
    console.warn('CLICKED ORDER BUTTON');
    getOrders().then(showOrders);
  });

  document.querySelector('#add-button').addEventListener('click', () => {
    console.warn('CLICKED CREATE ORDER BUTTON');
  });

  // STRETCH: SEARCH
  // document.querySelector('#search').addEventListener('keyup', (e) => {
  //   const searchValue = document.querySelector('#search').value.toLowerCase();
  //   console.warn(searchValue);

  //   // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
  //   if (e.keyCode === 13) {
  //     document.querySelector('#search').value = '';
  //   }
  // });
};

export default navigationEvents;
