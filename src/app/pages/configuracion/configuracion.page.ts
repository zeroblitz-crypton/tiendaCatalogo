import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


const KEY_STORAGE="credencial";
@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {
  credencial:String;
  nuevacredencial:String;
  confirmarcredencial:String;

  constructor(public rout:Router, private storage:Storage, private plt: Platform, private toastController:ToastController) {
    this.plt.ready().then(()=>{
      this.getCredencial();
    }) 
   }

  ngOnInit() {

  }
  getCredencial(){
    this.storage.get(KEY_STORAGE).then((val) => {
      if(val === null){
        this.credencial="";
      }else{
        this.credencial=val;
      }
      
      
      
    });
  }
  guardar(){
    if(this.nuevacredencial===this.confirmarcredencial){
      this.storage.set(KEY_STORAGE,this.nuevacredencial);
      this.getCredencial();
      this.showToast("La credencial fue actualizada");
      this.rout.navigate(['/inicio'],{})

    }
    else{
      this.showToast("Las credenciales no son iguales");
    }
  }
  limpiarCampos(){
    this.nuevacredencial=null;
    this.confirmarcredencial=null;
    this.credencial=null;
  }

  async showToast(mensaje){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
  

}
