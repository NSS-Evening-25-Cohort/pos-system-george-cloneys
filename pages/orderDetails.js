// file for domstring/bootstrap styling for such card

import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyItem = () => {
  const domString = '<h1>No Item Yet!</h1>';
  renderToDOM('#store', domString);
};

const showItems = (array, orderId) => {
  clearDom();

  const btnString = `<button class="btn btn-primary btn-lg mb-4" id="add-item-btn--${orderId}">Add New Item</button>`;

  renderToDOM('#add-item-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.item_name}</h5>
        <h5 class="card-title">${item.item_price}</h5>
        <i class="btn btn-primary" id="edit-item-btn--${item.firebaseKey}">Edit Item</i>
        <i class="btn btn-danger" id="delete-item-btn--${item.firebaseKey}">Delete Item</i>
      </div>
    </div>
    <div>
    <button class="btn btn-primary btn-lg mb-4" id="payment-btn--${orderId}">Go To Payment</button>;</div>
    `;
  });
  renderToDOM('#store', domString);
};

export { showItems, emptyItem };
