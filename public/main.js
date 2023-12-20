// USE WITH FIREBASE AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import logo from '../components/images/logo.png';

const init = () => {
  document.querySelector('#login-form-container').innerHTML = `<img src="${logo} " alt="Logo" class="logo-image">
  `;
  ViewDirectorBasedOnUserAuthStatus();
};

init();
