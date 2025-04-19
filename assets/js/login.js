// Firebase: Inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Variables
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  // Validar campos
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("Inicio de sesión exitoso:", userCredential.user.email);
      window.location.href = "dashboard.html"; // Redirigir tras login exitoso
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
// Firebase: Validar sesión activa
auth.onAuthStateChanged(user => {
  if (user) {
    console.log("Sesión activa con:", user.email);
    window.location.href = "dashboard.html";
  }
});
