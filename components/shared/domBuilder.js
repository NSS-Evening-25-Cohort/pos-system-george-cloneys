import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="main-container">
  <div id="login-container"></div>
  <div id="navigation"></div>
  <div id="homeContainer"></div>
    <div id="add-button"></div>
    <div id="form-container">
    </div>
    <div id="add-item-button"></div>
    <div id="store"></div>
    <div id="revenueContainer"></div>
    <div id="view"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
