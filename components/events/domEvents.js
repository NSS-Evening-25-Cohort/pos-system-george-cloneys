import { getVocab, getSingleVocab, deleteVocab } from '../../api/vocabData';
import { showVocab } from '../../pages/vocab';
import addVocabForm from '../forms/addWord';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      }
    }

    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm();
    }

    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(vocabObj));
    }
  });
};

export default domEvents;
