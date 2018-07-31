const btnFace = document.getElementById('btnFace');
btnFace.addEventListener('click', function (e) {
  let provider = new firebase.auth.FacebookAuthProvider();
  validacion(provider);
});
const validacion = (provider) => {
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    console.log(errorCode);
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    console.log(email);
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(credential);
  });
}