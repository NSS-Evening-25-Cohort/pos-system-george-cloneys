import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const revenuePage = (orders) => {
  // console.warn('revenue page orders:', orders);
  // calculate total revenue
  let totalRevenue = 0;
  let totalTips = 0;
  let totalWalkIns = 0;
  let totalCallIns = 0;
  const paymentTypes = [];
  orders.forEach((order) => {
    // console.warn('order:', order);
    // loop over items
    order.items.forEach((item) => {
      // console.warn('item', item);
      const parsedItemPrice = parseFloat(item.item_price);
      if (!Number.isNaN(parsedItemPrice)) {
        totalRevenue += parsedItemPrice;
      }
    });
    if (order.order_type === 'Walk-in') totalWalkIns += 1;
    if (order.order_type === 'Call-in') totalCallIns += 1;

    const parsedTipAmount = parseFloat(order.tip_amount);
    if (!Number.isNaN(parsedTipAmount)) {
      totalTips += parsedTipAmount;
      totalRevenue += parsedTipAmount;
    }
    paymentTypes.push(order.payment_type);
  });
  clearDom();
  const domString = `
  <div class="d-flex flex-column justify-content-center">
  <h1 class="page-title">REVENUE</h1></div>
  <h1 class="page-title">TOTAL REVENUE: ${new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(totalRevenue)}</h1></div>
  <h6 class="card-title1">DATE RANGE:</h6>
  <h6 class="card-title1">TOTAL TIPS: ${totalTips}</h6>
  <h6 class="card-title1">TOTAL CALL IN ORDERS: ${totalCallIns}</h6>
  <h6 class="card-title1">TOTAL WALK IN ORDERS: ${totalWalkIns}</h6>
  <h6 class="card-title1">PAYMENT TYPES: ${Array.from(new Set(paymentTypes)).join(', ')}</h6>
  
  `;
  // I need another TOTAL REVENUE H1/P1 : equaling to total revenue
  renderToDOM('#revenueContainer', domString);
};

export default revenuePage;
