// for merged promises
import { getSingleOrder } from './orderData';
import { getSingleItem } from './itemData';
// TODO: Get data for viewBook
const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey).then((orderObject) => { // returns single book object
    getSingleItem(orderObject.order_id) // we nest this promise so that we can use the book object
      .then((itemObject) => resolve({ ...orderObject, itemObject }));
  }).catch(reject);
  // GET AUTHOR
  // Create an object that has book data and an object named authorObject
});

export default getOrderDetails;
