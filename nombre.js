export default class Nombre{
   constructor(nombre1,nombre2,apellido1,apellido2){
      this.nombre1=nombre1;
      this.nombre2=nombre2;
      this.apellido1=apellido1;
      this.apellido2=apellido2;
   }
   getNombreCompleto(){
      return `${this.nombre1} ${this.nombre2}${this.nombre2==""?"":" "}${this.apellido1} ${this.apellido2}`;
   }
   getApellidoNombre(){
      return `${this.apellido1} ${this.apellido2} ${this.nombre1}${this.nombre2==""?"":" "}${this.nombre2}`;
   }
   getIniciales(){
      return `${this.nombre1.substring(0,1)}${this.nombre2.substring(0,1)}${this.apellido1.substring(0,1)}${this.apellido2.substring(0,1)}`;
   }
}