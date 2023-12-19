import renderToDOM from '../../utils/renderToDom';
import clearDom from '../../utils/clearDom';

const closeOrderForm = (orderId) => {
  clearDom();
  const domString = `
    <form id="${`close-order-form--${orderId}`}" class="mb-4">
      <div class="form-group">
        <label for="title">Payment Type</label>
        <select name="payment-type" class="form-control" id="payment-type" required>
          <option value="">--Select--</option>
          <option value="cash">Cash</option>
          <option value="card">Card</option>
          <option value="mobile">Mobile</option>
          </select>
          </div>
      <div class="form-group">
        <label for="text">Tip Amount</label>
        <input type="number" class="form-control" id="tip-amount" required>
      </div>
    
      <button type="submit" class="btn btn-primary mt-3">Close Order</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default closeOrderForm;
