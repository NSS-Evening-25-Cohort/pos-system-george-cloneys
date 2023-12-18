import renderToDOM from '../../utils/renderToDom';
import clearDom from '../../utils/clearDom';

const closeOrderForm = (obj = {}, orderId) => {
  clearDom();
  const domString = `
    <form id="${obj && obj.firebaseKey ? `close-order-form--${obj.firebaseKey}--${orderId}` : `add-item-form--${orderId}`}" class="mb-4">
      <div class="form-group">
        <label for="title">Payment Type</label>
        <input type="text" class="form-control" id="payment-type" value="${obj.payment_type || ''}" required>
      </div>
      <div class="form-group">
        <label for="text">Tip Amount</label>
        <input type="text" class="form-control" id="tip-amount" value="${obj.tip_amount || ''}" required>
      </div>
    
      <button type="submit" class="btn btn-primary mt-3">Close Order</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default closeOrderForm;
