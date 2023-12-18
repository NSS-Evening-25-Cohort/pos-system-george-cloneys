// ## Part 6: Revenue
// * As an authenticated user, when I submit the Close Order form, a new revenue node is created with the following information:
//   * Total Order Amount (including tip)
//   * Date
//   * Payment Type
//   * Tip Amount
//   * Order Type
// * As an authenticated user, I should __NOT__ be able to close an order that has already been closed.
// * As an authenticated user, when the app first loads, I should see a home screen that has a button that reads "View Revenue".
// * As an authenticated user, I should be able to see the sum of all of the Revenue made to date.

// import closedorders from orderdata when its rendered
import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const revenuePage = () => {
  clearDom();
  const domString = `
  <div class="d-flex flex-column justify-content-center align-items-center">
  <h1 class="page-title">REVENUE</h1></div>
  <h1 class="page-title">TOTAL REVENUE: ${TOTALREVENUE}</h1>`;
// TOTAL REVENUE NEEDS TO BE A LET TOTAL REVENUE = MAYBE 0? AND THEN WITHIN A DOMSTRING NEED DOMSTRING += ORDER PRICE AND TIP. 
// NEED A let totalTips, let totalCallIns, let totalWalkins, 
<
  renderToDOM('#revenueContainer', domString);
};

export default revenuePage;
