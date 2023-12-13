import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">New Vocab</label>
        <input type="text" class="form-control" id="word" value="${obj.word || ''}" required>
      </div>
      <div class="form-group">
        <label for="text">Definition</label>
        <input type="text" class="form-control" id="definition" value="${obj.definition || ''}" required>
      </div>
      <div class="form-group">
        <label for="text">Posted By</label>
        <input type="text" class="form-control" id="posted_by" value="${obj.posted_by || ''}"npm syar required>
      </div>
      <div>Vocab Type</div>
      <div class="form-check">
         <input class="form-check-input" type="radio" name="flexRadioDefault" value="Language" id="Language">
          <label class="form-check-label" for="flexRadioDefault1">
           Language
          </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" value="Tech" id="Tech">
          <label class="form-check-label" for="flexRadioDefault2">
            Tech
          </label>
      </div>

      <button type="submit" class="btn btn-primary mt-3">Submit Vocab</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
