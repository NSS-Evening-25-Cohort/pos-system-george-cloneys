import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `edit-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
      <div class="form-group">
        <label for="title">Name for Order</label>
        <input type="text" class="form-control" id="orderName" value="${obj.orderName || ''}" required>
      </div>
      <div class="form-group">
        <label for="text">Phone Number</label>
        <input type="text" class="form-control" id="phoneNumber" value="${obj.phoneNumber || ''}" required>
      </div>
      <div class="form-group">
        <label for="text">Email</label>
        <input type="text" class="form-control" id="email" value="${obj.email || ''}"npm syar required>
      </div>
      <div>Order Type</div>
      <div class="form-check">
         <input class="form-check-input" type="radio" name="flexRadioDefault" value="Walk-in" id="walkIn">
          <label class="form-check-label" for="flexRadioDefault1">
           Walk in
          </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" value="Call-in" id="callIn">
          <label class="form-check-label" for="flexRadioDefault2">
            Call in
          </label>
      </div>

      <button type="submit" class="btn btn-primary mt-3">Submit Order</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addOrderForm;
