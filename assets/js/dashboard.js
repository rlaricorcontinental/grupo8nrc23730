// Firebase: Cargar dashboard
auth.onAuthStateChanged(user => {
  if (user) {
    db.collection("usuarios").doc(user.uid).get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          console.log("Bienvenido", data.nombre);
          document.getElementById("usuarioNombresHeader").innerText = data.Nombres;
          document.getElementById("usuarioNombres").innerText = data.Nombres;
          document.getElementById("usuarioApellidos").innerText = data.Apellidos;
          document.getElementById("usuarioCorreoLocal").innerText = data.CorreoLocal;
          document.getElementById("usuarioUID").innerText = user.uid;
        } else {
          console.log("No se encontró el documento del usuario.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos del usuario:", error);
      });
  } else {
    window.location.href = "login.html"; // Redirigir si no hay sesión activa
  }
});
// Firebase: Cerrar sesión
function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html"; // Redirigir al cerrar sesión
  });
}
