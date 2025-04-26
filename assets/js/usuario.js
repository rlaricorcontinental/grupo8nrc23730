export class Usuario {
    constructor(doc) {
      this.UID = doc.id;
      const data = doc.data();
      this.Nombres = data.Nombres || "-";
      this.Apellidos = data.Apellidos || "-";
      this.FechaNacimiento = data.FechaNacimiento?.toDate?.() || "-";
      this.Celular = data.Celular || "-";
      this.CorreoLocal = data.CorreoLocal || "-";
      this.CorreoPersonal = data.CorreoPersonal || "-";
      this.CorreoUC = data.CorreoUC || "-";
      this.Direccion = data.Direccion || "-";
      this.LugarResidencia = data.LugarResidencia || {
        Distrito: "-",
        Provincia: "-",
        Departamento: "-",
        Pais: "-"
      };
      this.CodigoPostal = data.CodigoPostal || "-";
    }
  
    NombreCompleto() {
      if (this.Nombres === "-" || this.Apellidos === "-") return "-";
      return `${this.Nombres} ${this.Apellidos}`;
    }
  
    NombreApellido() {
      if (this.Nombres === "-" || this.Apellidos === "-") return "-";
      const primerNombre = this.Nombres.split(' ')[0];
      const primerApellido = this.Apellidos.split(' ')[0];
      return `${primerNombre} ${primerApellido}`;
    }
  
    Edad() {
      if (!(this.FechaNacimiento instanceof Date)) return "-";
      const hoy = new Date();
      const nacimiento = this.FechaNacimiento;
      let edad = hoy.getFullYear() - nacimiento.getFullYear();
      const mes = hoy.getMonth() - nacimiento.getMonth();
      if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
      }
      return edad;
    }
  
    Residencia() {
      const l = this.LugarResidencia;
      if ([l.Distrito, l.Provincia, l.Departamento, l.Pais].includes("-")) return "-";
      return `${l.Distrito} - ${l.Provincia} - ${l.Departamento} - ${l.Pais}`;
    }
  }
  