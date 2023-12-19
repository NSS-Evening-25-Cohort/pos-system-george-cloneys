import renderToDOM from '../../utils/renderToDom';
import clearDom from '../../utils/clearDom';

const closeOrderForm = (orderId) => {
  clearDom();
  const domString = `
    <form id="${`close-order-form--${orderId}`}" class="mb-4">
      <div class="form-group">
        <label for="title">Payment Type</label>
        <input type="text" class="form-control" id="payment-type" required>
      </div>
      <div class="form-group">
        <label for="text">Tip Amount</label>
        <input type="text" class="form-control" id="tip-amount" required>
      </div>
    
      <button type="submit" class="btn btn-primary mt-3">Close Order</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default closeOrderForm;
