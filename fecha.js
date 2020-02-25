export default class Fecha{
   constructor(dia,mes,año){
      this.fecha=new Date(año,mes-1,dia)
      this.fechaActual=new Date();
      this.diaSemana=["Lunes","Martes","Miércoles","Jueves","Viernes","Sabado","Domingo"]
      this.mes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
  }
  getAños(){
      var años=this.fechaActual.getFullYear()-this.fecha.getFullYear();
      return años;
  }
  getMeses(años){
      var meses=años*12;
      return meses;
  }
  getSemanas(meses){
      var semanas=meses*4;
      return semanas;
  }
  getDias(semanas){
      var dias=semanas*7;
      return dias;
  }
  getFecha(){
      let mes=this.mes[this.fecha.getMonth()]

      var fechaF=`${this.fecha.getDate()}/${mes}/${this.fecha.getFullYear()}`;
      return fechaF;
      
  }
  getDiaFecha(){
      let dia=this.diaSemana[this.fecha.getDay()];
      return dia;
  }
}