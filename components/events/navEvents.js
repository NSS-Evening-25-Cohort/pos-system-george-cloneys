import { filterLanguage, filterTech, getVocab } from '../../api/vocabData';
import { showVocab } from '../../pages/vocab';
import { signOut } from '../../utils/auth';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#vocab').addEventListener('click', () => {
    getVocab(user.uid).then(showVocab);
  });

  document.querySelector('#Tech').addEventListener('click', () => {
    filterTech(user.uid).then(showVocab);
  });

  document.querySelector('#Language').addEventListener('click', () => {
    filterLanguage(user.uid).then(showVocab);
  });
  // STRETCH: SEARCH
  // document.querySelector('#search').addEventListener('keyup', (e) => {
  //   const searchValue = document.querySelector('#search').value.toLowerCase();
  //   console.warn(searchValue);

  //   // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
  //   if (e.keyCode === 13) {
  //     document.querySelector('#search').value = '';
  //   }
  // });
};

export default navigationEvents;
