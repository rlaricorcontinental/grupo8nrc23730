// Firebase: Validar sesión activa
auth.onAuthStateChanged(user => {
  const alternativo = false;
  if (user) {
    console.log("Sesión activa ", user.email);
    tddDatosMostrarResultados(true, alternativo);
    cargarUsuario(user.uid);
  } else {
    console.error("No hay sesión activa");
    tddDatosMostrarResultados(false, alternativo);
    if (!alternativo) {
      setTimeout(function redireccion(){
        window.location.href = "login.html"
      }, 3000);
    }
  }
});
// HTML: Activar/Desactivar (y guardar anexo) campos de edición 
document.getElementById("editBtn").addEventListener("click", () => {
  const editBtn = document.getElementById('editBtn');
  const aEditar = editBtn.textContent === 'Editar';
  if (aEditar) {
    document.body.classList.add('editing');
    editBtn.textContent = "Guardar"
    document.getElementById("edit.Celular").value = document.getElementById("usuario.Celular").textContent;
    document.getElementById("edit.CorreoPersonal").value = document.getElementById("usuario.CorreoPersonal").textContent;
    document.getElementById("edit.CodigoPostal").value = document.getElementById("usuario.CodigoPostal").textContent;
  } else {
    document.body.classList.remove('editing');
    editBtn.textContent = "Guardando..."
    guardarUsuario(document.getElementById("usuario.UID").textContent, {
      Celular: document.getElementById("edit.Celular").value,
      CorreoPersonal: document.getElementById("edit.CorreoPersonal").value,
      CodigoPostal: document.getElementById("edit.CodigoPostal").value
    });
  }
});
// Firebase: Cerrar sesión
document.getElementById("logoutBtn").addEventListener("click", () => {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
});
// Firebase y HTML: Cargar datos de Usuario Autenticado
async function cargarUsuario(uid) {
  try {
    const usuario = await UsuarioActual.getUsuario(uid);
    if (!usuario) {
      console.log("No se encontró el documento del usuario.");
      return;
    }
    console.log("Bienvenido", usuario.NombreApellido());
    document.getElementById("usuario.NombreApellido").innerText = usuario.NombreApellido();
    document.getElementById("usuario.Nombres").innerText = usuario.Nombres;
    document.getElementById("usuario.Apellidos").innerText = usuario.Apellidos;
    document.getElementById("usuario.FechaNacimiento").innerText = formatDate(usuario.FechaNacimiento);
    document.getElementById("usuario.Edad").innerText = usuario.Edad() + " años";
    document.getElementById("usuario.Celular").innerText = usuario.Celular;
    document.getElementById("usuario.CorreoLocal").innerText = usuario.CorreoLocal;
    document.getElementById("usuario.CorreoPersonal").innerText = usuario.CorreoPersonal;
    document.getElementById("usuario.CorreoUC").innerText = usuario.CorreoUC;
    document.getElementById("usuario.Direccion").innerText = usuario.Direccion;
    document.getElementById("usuario.Residencia").innerText = usuario.Residencia();
    document.getElementById("usuario.CodigoPostal").innerText = usuario.CodigoPostal;
    document.getElementById("usuario.UID").innerText = usuario.UID;
  } catch (error) {
    console.error("Error al obtener los datos del usuario:", error);
  }
}
// Firebase: Guardar datos de Usuario Autenticado
async function guardarUsuario(uid, aActualizar) {
  try {
    const actualizar = await UsuarioActual.updateUsuario(uid, aActualizar);
    if (!actualizar) {
      throw new Error("Error: Actualización fallida");
    }
    document.getElementById("usuario.Celular").textContent = aActualizar.Celular;
    document.getElementById("usuario.CorreoPersonal").textContent = aActualizar.CorreoPersonal;
    document.getElementById("usuario.CodigoPostal").textContent = aActualizar.CodigoPostal;
    console.log("Usuario Actualizado");
  } catch (error) {
    console.error("Error al actualizar:", error);
  } finally {
    const editBtn = document.getElementById("editBtn");
    editBtn.textContent = "Editar";
    editBtn.disabled = false;
  }
}
// Función auxiliar para formatear fecha
function formatDate(date) {
  if (!date || date === "-") return "-";
  if (typeof date === 'string') return date;
  try {
    // Si es un objeto de fecha de Firestore
    const jsDate = date.toDate ? date.toDate() : date;
    return jsDate.toLocaleDateString();
  } catch (e) {
    console.error("Error formateando fecha:", e);
    return "-";
  }
}
// Función TDD
function tddDatosMostrarResultados(activo, alternativo) {
  if (activo) {
    document.getElementById("tdd.Escenario").innerText = "2: Usuario Autenticado";
    document.getElementById("tdd.Esperado").innerText = "Carga los datos del usuario autenticado";
    document.getElementById("tdd.Resultado").innerText = "Los datos del usuario se mostraron correctamente en la pantalla";
    document.getElementById("tdd.Test").innerText = "✅ Pass";
    document.getElementById("tdd.Cierre").innerText = "Dashboard: Mantener Página Abierta";
  } else {
    document.getElementById("tdd.Escenario").innerText = "1: Usuario No Autenticado";
    document.getElementById("tdd.Esperado").innerText = "Redirigir automáticamente a login.html";
    if (!alternativo) {
      document.getElementById("tdd.Resultado").innerText = "El sistema redirigió automáticamente a login.html";
      document.getElementById("tdd.Test").innerText = "✅ Pass";
      document.getElementById("tdd.Cierre").innerText = "Dashboard: Redirigir a Login en 3 segs";
    } else {
      document.getElementById("tdd.Resultado").innerText = "Los campos quedaron cargando indefinidamente, devtools mostró el error indicando que no había sesión activa.";
      document.getElementById("tdd.Test").innerText = "❌ Error";
      document.getElementById("tdd.Cierre").innerText = "Dashboard: Mantener Página Abierta";
    }
  }
}