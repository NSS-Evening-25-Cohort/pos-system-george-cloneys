import renderToDOM from '../utils/renderToDom';
// import clearDom from '../utils/clearDom';

const loginPage = () => {
  // clearDom();
  const domString = `<div class="logo"><h1>LALAL</h1><img src="./components/images/logo.png" /></div>
  <div><h1>hi</h1></div>
`;

  renderToDOM('#login-container', domString);
};

export default loginPage;
