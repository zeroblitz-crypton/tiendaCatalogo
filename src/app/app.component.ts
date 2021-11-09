import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

const KEY_STORAGE="credencial";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  credencial:String;
  constructor(private plt: Platform, private storage:Storage, private alert:AlertController,private rout:Router,private toastController:ToastController) {
    this.plt.ready().then(()=>{
      this.getCredencial();
    })
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

  async launchAlert(id){
       
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Cuidado!',
      message: 'Solo personal autorizado',            
      inputs: [
          {
            name: 'psw',
            type: 'password',
            label: 'Contraseña',            
           
          }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
         
        },
        {
          text: 'Aceptar',
          handler: data => {      
            
                  
            if(data.psw===this.credencial){

              if(id===1){                
                this.rout.navigate(['/configuracion'],{})
              }
              if(id===2){                
                this.rout.navigate(['/registracatalogo'])
              }

            }
            else{
              this.showToast("Credencial incorrecta");
            }
            
          }
        }
      ]
    });
    await alert.present();
  }

  async showToast(mensaje){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

}
