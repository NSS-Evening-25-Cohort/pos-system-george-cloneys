// file for domstring/bootstrap styling for such card

import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyOrder = () => {
  const domString = '<h1>No Orders Yet!</h1>';
  renderToDOM('#store', domString);
};

const showOrders = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-primary btn-lg mb-4" id="add-order-btn">Add New Order</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.orderName}</h5>
        <h6 class="card-title">${item.phoneNumber}</h6>
        <h6 class="card-title">${item.email}</h6>
        <h6 class="card-title">${item.order_type}</h6>
        <h6 class="card-title">${item.orderStatus}</h6>
        <i class="btn btn-primary" id="order-details-btn--${item.firebaseKey}">Details</i>
        <i class="btn btn-primary" id="edit-order-btn--${item.firebaseKey}">Edit Order</i>
        <i class="btn btn-danger" id="delete-order-btn--${item.firebaseKey}">Delete Order</i>
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export { showOrders, emptyOrder };
