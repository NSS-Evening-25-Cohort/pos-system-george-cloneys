import { createVocab, getVocab, updateVocab } from '../../api/vocabData';
import { showVocab } from '../../pages/vocab';
import formattedDate from '../../utils/timestamp';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-vocab')) {
      const payload = {
        word: document.querySelector('#word').value,
        definition: document.querySelector('#definition').value,
        posted_by: document.querySelector('#posted_by').value,
        vocab_type: document.querySelector('input[name="flexRadioDefault"]:checked').value,
        time_submitted: formattedDate,
        uid: user.uid
      };
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      });
    }

    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        word: document.querySelector('#word').value,
        definition: document.querySelector('#definition').value,
        posted_by: document.querySelector('#posted_by').value,
        vocab_type: document.querySelector('input[name="flexRadioDefault"]:checked').value,
        firebaseKey,
      };

      updateVocab(payload).then(() => {
        getVocab(user.uid).then(showVocab);
      });
    }
  });
};

export default formEvents;
