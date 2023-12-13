import { getOrders } from '../../api/orderData';
import { showOrders } from '../../pages/order';
import { signOut } from '../../utils/auth';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#orders').addEventListener('click', () => {
    getOrders(user.uid).then(showOrders);
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
