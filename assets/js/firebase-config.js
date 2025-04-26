// Firebase: Configuración
export const firebaseConfig = {
    apiKey: "AIzaSyAkV2EhjdbpWQ_B4lpAcAqYkGvwl8u2zm4",
    authDomain: "portafolio-uc.firebaseapp.com",
    projectId: "portafolio-uc",
    storageBucket: "portafolio-uc.firebasestorage.app",
    messagingSenderId: "63448627048",
    appId: "1:63448627048:web:2b285777c645f8bd2508dd"
};
// Firebase: Inicialización
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
