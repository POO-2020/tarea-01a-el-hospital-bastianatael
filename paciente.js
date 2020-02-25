import Fecha from "./fecha.js"
import Nombre from "./nombre.js"
export default class Paciente{
   constructor(nombre,fechaNacimiento,telefono){
      this.nombre=nombre;
      this.year=fechaNacimiento.substring(0,4);
      this.month=fechaNacimiento.substring(4,6);
      this.day=fechaNacimiento.substring(6,8);

      this.nombre1=nombre[0];
      this.nombre2=nombre[1];
      this.apellido1=nombre[2];
      this.apellido2=nombre[3];
      this.telefono=telefono; 
   }
   getPerfil(){
      let nombre=new Nombre(this.nombre1,this.nombre2,this.apellido1,this.apellido2).getNombreCompleto();
      let fecha=new Fecha(this.day,this.month,this.year).getFecha();
      return `${nombre}, ${fecha}, ${this.telefono}`;
   }
}