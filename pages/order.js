// file for domstring/bootstrap styling for such card

import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocab Yet!</h1>';
  renderToDOM('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-primary btn-lg mb-4" id="add-vocab-btn">Add New Vocab</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.word}</h5>
        <h6 class="card-title">Category: ${item.vocab_type}</h6>
        <p>${item.definition}</p>
        <i class="btn btn-primary" id="edit-vocab-btn--${item.firebaseKey}">Edit Vocab</i>
        <i class="btn btn-danger" id="delete-vocab-btn--${item.firebaseKey}">Delete Vocab</i>
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };
