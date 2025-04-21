// Firebase: Cargar dashboard
auth.onAuthStateChanged(user => {
  if (user) {
    db.collection("usuarios").doc(user.uid).get()
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

class Usuario {
  constructor(doc) {
    this.UID = doc.id;
    this.Nombres = doc.data().Nombres || "-";
    this.Apellidos = doc.data().Apellidos || "-";
    this.FechaNacimiento = doc.data().FechaNacimiento || "-";
    this.Celular = doc.data().Celular || "-";
    this.CorreoLocal = doc.data().CorreoLocal || "-";
    this.CorreoPersonal = doc.data().CorreoPersonal || "-";
    this.CorreoUC = doc.data().CorreoUC || "-";
    this.Direccion = doc.data().Direccion || "-";
    this.LugarResidencia = doc.data().LugarResidencia || {
      Distrito: "-",
      Provincia: "-",
      Departamento: "-",
      Pais: "-"
    };
    this.CodigoPostal = doc.data().CodigoPostal || "-";
  }
  NombreCompleto() {
    if (this.Nombres === "-" || this.Apellidos === "-") {
      return "-";
    }
    return `${this.Nombres} ${this.Apellidos}`;
  }
  NombreApellido() {
    if (this.Nombres === "-" || this.Apellidos === "-") {
      return "-";
    }
    const primerNombre = this.Nombres.split(' ')[0];
    const primerApellido = this.Apellidos.split(' ')[0];
    return `${primerNombre} ${primerApellido}`;
  }
  Edad() {
    if (this.FechaNacimiento === "-") {
      return "-";
    }
    const hoy = new Date();
    const nacimiento = new Date(this.FechaNacimiento);
    if (isNaN(nacimiento.getTime())) {
      return "-";
    }
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  }
  Residencia() {
    if (this.LugarResidencia.Distrito === "-" || 
        this.LugarResidencia.Provincia === "-" || 
        this.LugarResidencia.Departamento === "-" || 
        this.LugarResidencia.Pais === "-") {
      return "-";
    }
    return `${this.LugarResidencia.Distrito} - ${this.LugarResidencia.Provincia} - ${this.LugarResidencia.Departamento} - ${this.LugarResidencia.Pais}`;
  }
}