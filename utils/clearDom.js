const clearDom = () => {
  document.querySelector('#login-form-container').innerHTML = '';
  document.querySelector('#homeContainer').innerHTML = '';
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#add-item-button').innerHTML = '';
  // document.querySelector('#revenueContainer').innerHTML = '';
};

export default clearDom;
