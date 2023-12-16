import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const homePage = () => {
  clearDom();
  const domString = `
  <h2>Welcome :D!</h2>
  <button type="button" id="view-orders-btn1" class="btn btn-success">View Orders</button>
  <button type="button" id="create-orders-btn2" class="btn btn-info">Create an Order</button>
  <button type="button" id="view-revenue-btn3" class="btn btn-warning">View Revenue</button>
`;
  renderToDOM('#homeContainer', domString);
  // homeContainer subject to change
};

export default homePage;
