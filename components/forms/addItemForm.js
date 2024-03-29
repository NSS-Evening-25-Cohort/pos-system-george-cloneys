import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addItemForm = (obj = {}, orderId) => {
  clearDom();
  const domString = `
    <form id="${obj && obj.firebaseKey ? `edit-item-form--${obj.firebaseKey}--${orderId}` : `add-item-form--${orderId}`}" class="mb-4">
      <div class="form-group">
        <label for="title">Item Name</label>
        <input type="text" class="form-control" id="items-name" value="${obj.item_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="text">Item Price</label>
        <input type="text" class="form-control" id="items-price" value="${obj.item_price || ''}" required>
      </div>
    
      <button type="submit" class="btn btn-primary mt-3">Add/Edit Item</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addItemForm;
