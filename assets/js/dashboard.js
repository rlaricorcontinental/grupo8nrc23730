import { Usuario } from "./usuario.js";
import { auth, db } from "./firebase-config.js";
// Firebase: Validar sesión activa
auth.onAuthStateChanged(user => {
  if (user) {
    console.log("Sesión activa ", user.email);
    cargarUsuario(user.uid);
  } else {
    console.error("No hay sesión activa ");
    window.location.href = "login.html";
  }
});
// Firebase: Cerrar sesión
document.getElementById("logoutBtn").addEventListener("click", () => {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
});
// Firebase: Cargar datos de Usuario Autenticado
function cargarUsuario(uid) {
  db.collection("usuarios").doc(uid).get()
    .then((doc) => {
      if (doc.exists) {
        const usuario = new Usuario(doc);
        console.log("Bienvenido", usuario.NombreApellido());
        document.getElementById("usuario.NombreApellido").innerText = usuario.NombreApellido();
        document.getElementById("usuario.Nombres").innerText = usuario.Nombres;
        document.getElementById("usuario.Apellidos").innerText = usuario.Apellidos;
        document.getElementById("usuario.FechaNacimiento").innerText = usuario.FechaNacimiento;
        document.getElementById("usuario.Edad").innerText = usuario.Edad() + " años";
        document.getElementById("usuario.Celular").innerText = usuario.Celular;
        document.getElementById("usuario.CorreoLocal").innerText = usuario.CorreoLocal;
        document.getElementById("usuario.CorreoPersonal").innerText = usuario.CorreoPersonal;
        document.getElementById("usuario.CorreoUC").innerText = usuario.CorreoUC;
        document.getElementById("usuario.Direccion").innerText = usuario.Direccion;
        document.getElementById("usuario.Residencia").innerText = usuario.Residencia();
        document.getElementById("usuario.CodigoPostal").innerText = usuario.CodigoPostal;
        document.getElementById("usuario.UID").innerText = usuario.UID;
      } else {
        console.log("No se encontró el documento del usuario.");
      }
    })
    .catch((error) => {
      console.error("Error al obtener los datos del usuario:", error);
    });
}
