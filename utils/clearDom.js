const clearDom = () => {
  document.querySelector('#login-container').innerHTML = '';
  document.querySelector('#homeContainer').innerHTML = '';
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

export default clearDom;
