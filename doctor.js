import Nombre from "./nombre.js"
export default class Doctor{
   constructor(cedula,especialidad,nombre,telefono){
      this.cedula=cedula;
      this.especialidad=especialidad;

      this.nombre1=nombre[0];
      this.nombre2=nombre[1];
      this.apellido1=nombre[2];
      this.apellido2=nombre[3];

      this.telefono=telefono;
   }
   getPerfil(){
      let nombre=new Nombre(this.nombre1,this.nombre2,this.apellido1,this.apellido2).getNombreCompleto();

      return `${this.cedula}, ${this.especialidad}, ${nombre}, ${this.telefono}`;
   }
   }