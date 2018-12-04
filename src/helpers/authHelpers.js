import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#movies').show();
      $('#auth').hide();
      $('#navbar-button-auth').hide();
      $('#navbar-button-movies').show();
      $('#navbar-button-logout').show();
    } else {
      $('#movies').hide();
      $('#locations').hide();
      $('#auth').show();
      $('#navbar-button-auth').show();
      $('#navbar-button-movies').hide();
      $('#navbar-button-logout').hide();
    }
  });
};

const getCurrentUid = () => firebase.auth().currentUser.uid;

export default { checkLoginStatus, getCurrentUid };
