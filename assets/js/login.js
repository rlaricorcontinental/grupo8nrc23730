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
      if (error.code === 'auth/invalid-credential') {
        msg = "Usuario y/o contraseña incorrectos.";
      } else if (error.code === 'auth/network-request-failed') {
        msg = "Error de red. Verifica tu conexión.";
      } else {
        msg = "Otro error: ", error.code
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
