import logoutButton from '../components/buttons/logoutButton';
import navBar from '../components/shared/navBar';
import domEvents from '../components/events/domEvents';
import navEvents from '../components/events/navEvents';
import domBuilder from '../components/shared/domBuilder';
import formEvents from '../components/events/formEvents';
// import { getOrders } from '../api/orderData';
// import { showOrders } from '../pages/order';
import homePage from '../pages/homePage';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  homePage();// shows home page after logging in
  // getOrders().then((order) => showOrders(order));
};

export default startApp;
