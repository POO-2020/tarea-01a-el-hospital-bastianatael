export default class Tiempo{
   constructor(periodo){
      this.periodo=periodo;
      this.hora=periodo.substring(0,2);
      this.minuto=periodo.substring(2,4);
  }
  getFormato12(){
     let hora = `${this.hora>12?this.hora-12:this.hora}:${this.minuto}`;
     return hora;
  }
  getFormato24(){
   let hora = `${this.hora}:${this.minuto}`
  }
}