import renderToDOM from '../utils/renderToDom';
// import clearDom from '../utils/clearDom';
import logo from '../components/images/logo.png';

const loginPage = () => {
  // clearDom();
  const domString = `<div class="logo"><h1>LALAL</h1><img src="${logo}"></div>
  <div><h1>hi</h1></div>
`;

  renderToDOM('#login-container', domString);
};

export default loginPage;
