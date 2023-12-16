// for merged promises
// import { getSingleOrder } from './orderData';
// import { getSingleItem } from './itemData';

// const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
//   getSingleItem(firebaseKey).then((itemObject) => {
//     getSingleOrder(itemObject.order_id)
//       .then((orderObject) => resolve({ ...itemObject, orderObject }));
//   }).catch(reject);
// });

// export default getOrderDetails;
