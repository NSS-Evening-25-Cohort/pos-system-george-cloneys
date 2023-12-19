import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const revenuePage = (items, tipAmount) => {
  // calculate total revenue
  let totalRevenue = [];
  items.forEach((item) => {
    totalRevenue += parseFloat(item.item_price);
    console.warn(totalRevenue, item.item_price);
  });
  totalRevenue += parseFloat(tipAmount);
  clearDom();
  const domString = `
  <div class="d-flex flex-column justify-content-center">
  <h1 class="page-title">REVENUE</h1></div>
  <h1 class="page-title">TOTAL REVENUE:${totalRevenue}</h1></div>
  <h6 class="card-title">DATE RANGE:</h6>
  <h6 class="card-title">TOTAL TIPS:</h6>
  <h6 class="card-title">TOTAL CALL IN ORDERS:</h6>
  <h6 class="card-title">TOTAL WALK IN ORDERS:</h6>
  <h6 class="card-title">PAYMENT TYPES:
  cash
  credit
  mobile</h6>
  
  `;
  // I need another TOTAL REVENUE H1/P1 : equaling to total revenue
  renderToDOM('#revenueContainer', domString);
};

export default revenuePage;
