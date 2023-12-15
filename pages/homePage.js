import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const homePage = () => {
  clearDom();
  const domString = `
  <h2>Welcome :D!</h2>
  <button type="button" id="view-orders" class="btn btn-sucess">View Orders</button>
  <button type="button" id="create-orders" class="btn btn-info">Create an Order</button>
  <button type="button" id="class="btn btn-warning">View Revenue</button>
`;
  renderToDOM('#homeContainer', domString);
  // homeContainer subject to change
};

export default homePage;
