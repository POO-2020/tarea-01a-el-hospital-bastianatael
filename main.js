import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Nombre from "./nombre.js";
import Paciente from "./paciente.js";
import Doctor from "./doctor.js";
import Cita from "./cita.js";

var doctores=new Array();
var citas=new Array();

class Main{
   registrarDoctor(data){
      let doctor=new Array();
      doctor[0]=data[0];
      doctor[1]=data[1];
      doctor[2]=data[2];
      doctor[3]=data[3];
      let cedula=data[4];
      let especialidad=data[5];
      let telefonoDr=data[6]
      let r=new Doctor(cedula,especialidad,doctor,telefonoDr).getPerfil();
      doctores.push(r);
   }
   listarDoctor(){
      console.log(doctores);
   }
   registrarCita(data){
      let r=new Cita(data[0],data[1],data[2],data[3]).getPerfil();
      citas.push(r);

   }
   listarCita(){
      console.log(citas);
   }
}
let app=new Main();
app.registrarDoctor(["Eliud","","Barragán","Cisneros","2134123123","Neurología","312312323"]);
app.registrarDoctor(["Ramon","","Serrano","Cisneros","21342231","Ginecólogo","312676534"]);
app.listarDoctor();
app.registrarCita(["20200312","1225","Eliud Barragán","Bastian Natael Hernández"]);
app.listarCita();