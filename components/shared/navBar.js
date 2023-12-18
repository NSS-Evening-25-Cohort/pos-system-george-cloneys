import renderToDOM from '../../utils/renderToDom';
import clearDom from '../../utils/clearDom';

const navBar = () => {
  clearDom();
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
        <li>
        <a class="navbar-brand title" id="home" href="#">Cloneys Wings!</a></li> 
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#" id="orders">View Orders</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#" id="add-button">Create an Order</a>
            </li>
          </ul>
          <span class="navbar-text">
            <div id="cart-button"></div>
            <div id="logout-button"></div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
