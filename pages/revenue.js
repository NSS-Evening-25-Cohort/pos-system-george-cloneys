import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const revenuePage = () => {
  clearDom();
  const domString = `
  <div class="d-flex flex-column justify-content-center align-items-center">
  <h1 class="page-title">REVENUE</h1></div>`;
  // I need another TOTAL REVENUE H1/P1 : equaling to total revenue
  renderToDOM('#revenueContainer', domString);
};

export default revenuePage;
