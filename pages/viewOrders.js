// file for domstring/bootstrap styling for such card

import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyOrder = () => {
  const domString = '<h1>No Orders Yet!</h1>';
  renderToDOM('#store', domString);
};

const showOrders = (orders) => {
  clearDom();

  const btnString = '<button class="btn btn-primary btn-lg mb-4" id="add-order-btn">Add New Order</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  orders.forEach((order) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${order.orderName}</h5>
        <h6 class="card-title">${order.phoneNumber}</h6>
        <h6 class="card-title">${order.email}</h6>
        <h6 class="card-title">${order.order_type}</h6>
        <h6 class="card-title">${order.status}</h6>
        <i class="btn btn-primary" id="order-details-btn--${order.firebaseKey}--${order.status}">Details</i>
        <i class="btn btn-primary" id="edit-order-btn--${order.firebaseKey}">Edit Order</i>
        <i class="btn btn-danger" id="delete-order-btn--${order.firebaseKey}">Delete Order</i>
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export { showOrders, emptyOrder };
