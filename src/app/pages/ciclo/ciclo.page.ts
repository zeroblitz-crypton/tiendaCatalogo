import { Component, OnInit } from '@angular/core';
interface Ciclo{
  fecha_activacion:String,
  fecha_entrega:String,
  fecha_pago:String,
}
@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.page.html',
  styleUrls: ['./ciclo.page.scss'],
})
export class CicloPage implements OnInit {
ciclo:Ciclo[];
flag:Boolean=true;
  constructor() { 
    this.ciclo=[
      {
        fecha_activacion:"Del 28 al 31",
        fecha_entrega:"1",
        fecha_pago:"Del 10 al 19",

      },
      {
        fecha_activacion:"Del 01 al 02",
        fecha_entrega:"3",
        fecha_pago:"Del 13 al 21",
      },
      {
        fecha_activacion:"El 03",
        fecha_entrega:"4",
        fecha_pago:"Del 14 al 22",
      },
      {
        fecha_activacion:"El 04",
        fecha_entrega:"5",
        fecha_pago:"Del 15 al 23",
      },
      {
        fecha_activacion:"Del 05 al 07",
        fecha_entrega:"8",
        fecha_pago:"Del 18 al 26",
      },
      {
        fecha_activacion:"El 08",
        fecha_entrega:"9",
        fecha_pago:"Del 19 al 27",
      },
      {
        fecha_activacion:"Del 09 al 10",
        fecha_entrega:"11",
        fecha_pago:"Del 21 al 29",
      },
      {
        fecha_activacion:"El 11",
        fecha_entrega:"12",
        fecha_pago:"Del 22 al 30",
      },
      {
        fecha_activacion:"Del 12 al 13",
        fecha_entrega:"14",
        fecha_pago:"Del 24 al 01",
      },
      {
        fecha_activacion:"Del 14 al 15",
        fecha_entrega:"16",
        fecha_pago:"Del 26 al 03",
      },
      {
        fecha_activacion:"Del 16 al 17",
        fecha_entrega:"18",
        fecha_pago:"Del 28 al 05",
      },
      {
        fecha_activacion:"El 18",
        fecha_entrega:"19",
        fecha_pago:"Del 28 al 05",
      },
      {
        fecha_activacion:"El 19",
        fecha_entrega:"20",
        fecha_pago:"Del 30 al 08",
      },
      {
        fecha_activacion:"Del 20 al 21",
        fecha_entrega:"22",
        fecha_pago:"Del 02 al 10",
      },
      {
        fecha_activacion:"Del 22 al 23",
        fecha_entrega:"24",
        fecha_pago:"Del 04 al 12",
      },
      {
        fecha_activacion:"El 24",
        fecha_entrega:"25",
        fecha_pago:"Del 05 al 14",
      },
      {
        fecha_activacion:"El 25",
        fecha_entrega:"26",
        fecha_pago:"Del 06 al 15",
      },
      {
        fecha_activacion:"Del 26 al 27",
        fecha_entrega:"28",
        fecha_pago:"Del 08 al 17",
      },
    ]
  }

  ngOnInit() {
  }

  cambiar(){
    if(this.flag){
      this.flag=false;
    }
    else{
      this.flag=true;
    }
  }
}
