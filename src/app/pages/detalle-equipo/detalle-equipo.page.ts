import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-equipo',
  templateUrl: './detalle-equipo.page.html',
  styleUrls: ['./detalle-equipo.page.scss'],
})
export class DetalleEquipoPage implements OnInit {
data:any;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params=>{
    
      this.data=JSON.parse(params.item);
      console.log(this.data);
      
    
  })
   }

  ngOnInit() {
  }

}
