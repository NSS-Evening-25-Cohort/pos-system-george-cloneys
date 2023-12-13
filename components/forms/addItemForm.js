import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addItemForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `edit-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
      <div class="form-group">
        <label for="title">New Item</label>
        <input type="text" class="form-control" id="items-name" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label for="text">Definition</label>
        <input type="text" class="form-control" id="items-price" value="${obj.price || ''}" required>
      </div>
    
      <button type="submit" class="btn btn-primary mt-3">Add/Edit Item</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addItemForm;
