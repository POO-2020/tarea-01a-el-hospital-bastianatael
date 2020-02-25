import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";

export default class Cita{
   constructor(fecha,hora,doctor,paciente){
      this.year=fecha.substring(0,4);
      this.month=fecha.substring(4,6);
      this.day=fecha.substring(6,8);
      this.hora=hora;
      this.nombreDoctor=doctor;
      this.nombrePaciente=paciente;
   }
   getPerfil(){
      let fecha=new Fecha(this.day,this.month,this.year).getFecha();
      let hora=new Tiempo(this.hora).getFormato12();
      return `${fecha}, ${hora} ${this.nombreDoctor}, ${this.nombrePaciente}`
   }
}