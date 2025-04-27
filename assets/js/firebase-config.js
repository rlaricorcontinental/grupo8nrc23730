// Configuración
const firebaseConfig = {
    apiKey: "AIzaSyAkV2EhjdbpWQ_B4lpAcAqYkGvwl8u2zm4",
    authDomain: "portafolio-uc.firebaseapp.com",
    projectId: "portafolio-uc",
    storageBucket: "portafolio-uc.appspot.com",
    messagingSenderId: "63448627048",
    appId: "1:63448627048:web:2b285777c645f8bd2508dd"
  };
  // Inicialización
  firebase.initializeApp(firebaseConfig);
  // Exportar servicios
  const auth = firebase.auth();
  const db = firebase.firestore();