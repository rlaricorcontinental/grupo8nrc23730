// Configuración de Firebase (reemplaza con tu configuración real)
const firebaseConfig = {
    apiKey: "AIzaSyAkV2EhjdbpWQ_B4lpAcAqYkGvwl8u2zm4",
    authDomain: "portafolio-uc.firebaseapp.com",
    projectId: "portafolio-uc",
    storageBucket: "portafolio-uc.firebasestorage.app",
    messagingSenderId: "63448627048",
    appId: "1:63448627048:web:2b285777c645f8bd2508dd"
  };
  
  // Inicializar Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Funcionalidad de login
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("Inicio de sesión exitoso:", userCredential.user.email);
        window.location.href = "dashboard.html"; // Redirigir tras login
      })
      .catch((error) => {
        let msg = "Ocurrió un error inesperado.";
        if (error.code === 'auth/user-not-found') {
          msg = "El usuario no existe.";
        } else if (error.code === 'auth/wrong-password') {
          msg = "Contraseña incorrecta.";
        } else if (error.code === 'auth/invalid-credential') {
          msg = "Credencial inválida o caducada.";
        }
        document.getElementById("error").innerText = msg;
      });
  });
  