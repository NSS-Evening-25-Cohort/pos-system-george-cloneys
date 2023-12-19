// file for domstring/bootstrap styling for such card

import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyItem = () => {
  const domString = '<h1>No Item Yet!</h1>';
  renderToDOM('#store', domString);
};

const showItems = (array, orderId, orderStatus) => {
  clearDom();

  const btnString = `<button class="btn btn-primary btn-lg mb-4" id="add-item-btn--${orderId}">Add New Item</button>`;
  renderToDOM('#add-item-button', btnString);

  let domString = '';
  let orderTotal = 0;
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${item.item_name}</h5>
    <h5 class="card-title">${item.item_price}</h5>
    <i class="btn btn-primary" id="edit-item-btn--${item.firebaseKey}">Edit Item</i>
    <i class="btn btn-danger" id="delete-item-btn--${item.firebaseKey}--${orderId}">Delete Item</i>
    </div>
    </div>
    `;

    orderTotal += parseFloat(item.item_price);
  });

  let totalDomString = `<h1>Total: ${new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(orderTotal)}</h1>`;

  let domString2 = '';
  domString2 = orderStatus === 'Closed' ? '' : `<div> 
  <button class="btn btn-primary btn-lg mb-4" id="close-order-btn--${orderId}">Close Order</button>
  </div>`;

  totalDomString += domString + domString2;
  renderToDOM('#store', totalDomString);
};

export { showItems, emptyItem };
