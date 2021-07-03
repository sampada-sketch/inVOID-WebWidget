import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBtGq4W37Su8E30Q1KtDGX9TfEx067pIWo",
    authDomain: "invoid-f98c2.firebaseapp.com",
    projectId: "invoid-f98c2",
    storageBucket: "invoid-f98c2.appspot.com",
    messagingSenderId: "485272512217",
    appId: "1:485272512217:web:6cc8431c5ffc26869940c8",
    measurementId: "G-MF8LPNCYS5"
  };
  
  const fire =firebase.initializeApp(firebaseConfig);



  firebase.analytics();
  export default fire;