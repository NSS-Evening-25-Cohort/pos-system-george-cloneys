import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const homePage = () => {
  clearDom();
  const domString = `
  <div class = welcomeContainer>
  <h2 style="color: white; margin-top: 50px; margin-bottom: 200px;">Welcome :D!</h2>
  <div style="display: flex; flex-direction: column; align-items: center;">
  <button type="button" id="view-orders-btn1" class="btn btn-success" style="width: 250px; margin-bottom: 10px;">View Orders</button>
  <button type="button" id="create-orders-btn2" class="btn btn-info" style="width: 250px; margin-bottom: 10px;">Create an Order</button>
  <button type="button" id="view-revenue-btn3" class="btn btn-warning"style="width: 250px; margin-bottom: 10px;">View Revenue</button>
  </div>
`;
  renderToDOM('#homeContainer', domString);
  // homeContainer subject to change
};

export default homePage;
