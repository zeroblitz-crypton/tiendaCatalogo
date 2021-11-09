import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, Platform, PopoverController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { DatabaseService } from 'src/app/services/database.service';


const KEY_STORAGE='equipos';

@Component({
  selector: 'app-registracatalogo',
  templateUrl: './registracatalogo.page.html',
  styleUrls: ['./registracatalogo.page.scss'],
})
export class RegistracatalogoPage implements OnInit {
  equipos=[];
  modificar:Boolean=false;
  id:Number;
  equipo={
    nombre:"",
    camaraPost:"",
    camaraFront:"",
    memoriaRam:"",
    memoriaInterna:"",
    bateria:"",
    precio:{
      precioPlan55:"",
      precioPlan49:"",
      precioPlan39:"",
      precioPlan29:"",
      precioPortaRenoPre:"",
      precioLineaNueva:""
    },
    imagen:"",
  }
  flag:Boolean=false;
  flag2:Boolean=false;
  constructor(private database:DatabaseService , private alert:AlertController, private storage:Storage,public toastController: ToastController,public rout:Router) {

   }

  ngOnInit() {
    this.getEquipos();
  }
  
  getEquipos(){
    this.database.getAll(KEY_STORAGE).then(firebaseResponse=>{
      firebaseResponse.subscribe(ref=>{
     this.equipos=ref.map(equiposRef=>{
       let e =equiposRef.payload.doc.data();
       e['id']=equiposRef.payload.doc.id;
       
       
       return e;
     })  
   });
 })
  }

  
  addEquipo(){
      if(this.modificar==true){            
      this.database.update(KEY_STORAGE,this.id,this.equipo);    
      this.limpiar();
      this.modificar=false;
      this.showToast("Se Modifico exitosamente")
    }
    else{
      
      this.database.create(KEY_STORAGE,this.equipo);
      this.limpiar()
      this.showToast("Se añadio exitosamente");
    }
    
    this.flag2=false;
  }

  limpiar(){
    this.equipo.nombre=null;
    this.equipo.camaraPost=null;
    this.equipo.camaraFront=null;
    this.equipo.memoriaRam=null;
    this.equipo.memoriaInterna=null;
    this.equipo.bateria=null;
    this.equipo.imagen=null;
    this.modificar=false;
    this.equipo.precio.precioPlan55=null;
    this.equipo.precio.precioPlan49=null;
    this.equipo.precio.precioPlan39=null;
    this.equipo.precio.precioPlan29=null;
    this.equipo.precio.precioPortaRenoPre=null;
    this.equipo.precio.precioLineaNueva=null;  
    this.flag2=false;
  }

  async showToast(mensaje){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  deleteEquipo(id){
  
      this.database.delete(KEY_STORAGE,id).then(res=>{

        this.showToast("Se elimino exitosamente");
      });
   
    
  }

  updateEquipo(id){

    for (let index = 0; index < this.equipos.length; index++) {
      if(id==this.equipos[index].id){      
        this.id=this.equipos[index].id;  
        this.equipo.nombre=this.equipos[index].nombre;
        this.equipo.camaraPost= this.equipos[index].camaraPost;
        this.equipo.camaraFront= this.equipos[index].camaraFront;
        this.equipo.memoriaRam= this.equipos[index].memoriaRam;
        this.equipo.memoriaInterna= this.equipos[index].memoriaInterna;
        this.equipo.bateria=  this.equipos[index].bateria;
        this.equipo.imagen = this.equipos[index].imagen;
        this.equipo.precio.precioPlan55=this.equipos[index].precio.precioPlan55;
        this.equipo.precio.precioPlan49=this.equipos[index].precio.precioPlan49;
        this.equipo.precio.precioPlan39=this.equipos[index].precio.precioPlan39;
        this.equipo.precio.precioPlan29=this.equipos[index].precio.precioPlan29;
        this.equipo.precio.precioPortaRenoPre=this.equipos[index].precio.precioPortaRenoPre;
        this.equipo.precio.precioLineaNueva=this.equipos[index].precio.precioLineaNueva;  
      }      
    }
    this.modificar=true;
    this.flag2=true;
  }
  goToDetail(item){
    const extras: NavigationExtras={
      queryParams:{
        item:JSON.stringify(item)
      }
    }
    this.rout.navigate(['/detalle-equipo'],extras)
  }
  desaparecerAparecer(){
    if(this.flag){
      this.flag=false;
    }
    else{
      this.flag=true;
    }
  }
  desaparecerAparecer2(){
    if(this.flag2){
      this.flag2=false;
    }
    else{
      this.flag2=true;
    }
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
  async launchAlert(id){    
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Cuidado!',
      message: 'Deseas <strong>eliminar este item</strong>?',
      
      
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
         
        },
        {
          text: 'Aceptar',
          handler: data => {
            this.deleteEquipo(id);                        
          }
        }
      ]
    });

    await alert.present();
  }
  downloadcsv(){
    //.showToast("Descargando");

   
  }
}
