import { deleteSingleItem } from './itemData';
import { getOrderItems, deleteSingleOrder } from './orderData';

const deleteOrderWithItems = (firebaseKey) => new Promise((resolve, reject) => {
  getOrderItems(firebaseKey).then((orderItemsArray) => {
    const deleteItemsPromises = orderItemsArray.map((item) => deleteSingleItem(item.firebaseKey));
    
    Promise.all(deleteItemsPromises).then(() => {
      deleteSingleOrder(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export default deleteOrderWithItems;
