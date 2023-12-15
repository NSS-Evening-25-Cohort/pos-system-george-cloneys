import renderToDOM from '../utils/renderToDom';

const pizzaLogo = () => {
  const domString = '<img src="https://user-images.githubusercontent.com/29741570/205346767-a182560c-64a6-4cfa-80b3-0d64cf998242.png">';

  renderToDOM(pizzaLogo, domString);
};

export default pizzaLogo;
