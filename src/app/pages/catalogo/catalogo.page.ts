import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { DatabaseService } from 'src/app/services/database.service';


interface Equipo{
  id:Number,
  nombre:String,
  camaraPost:String,
  camaraFront:String,
  memoriaRam:String,
  memoriaInterna:String,
  bateria:Number,
  imagen:String,
}
const KEY_STORAGE='equipos';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})



export class CatalogoPage implements OnInit {
  equipos=[];
  constructor(private database:DatabaseService,public rout:Router) { 
  }

  ngOnInit() {
    this.getEquipos()
  }

  getEquipos(){

    this.database.getAll(KEY_STORAGE).then(firebaseResponse=>{
      firebaseResponse.subscribe(ref=>{
     this.equipos=ref.map(equiposRef=>{
       let e =equiposRef.payload.doc.data();
       e['id']=equiposRef.payload.doc.id;
       console.log(e);       
       return e;
     })  
   });
 })

 }
  goToDetail(item){
    const extras: NavigationExtras={
      queryParams:{
        item:JSON.stringify(item)
      }
    }
    this.rout.navigate(['/detalle-equipo'],extras)
  }
  onSearchChange(event){
  

    let val = event.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.equipos = this.equipos.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else{
      this.getEquipos();
    }
    
  }
}
