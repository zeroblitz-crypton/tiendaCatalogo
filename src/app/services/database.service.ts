import { Injectable } from '@angular/core';



import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';








@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore:AngularFirestore) {
   }
 
 async create(collection,dato){
   try{
    return await this.firestore.collection(collection).add(dato);
   }catch(err){
    console.log("Hubo error ",err);
    
   }
  
 }
  
 async getAll(collection){
   try{
    return await this.firestore.collection(collection).snapshotChanges();
   }catch(err){
    console.log("Hubo error ",err);
    
   }
 }

 async getById(collection,id){
  try{
   return await this.firestore.collection(collection).doc(id).get();
  }catch(err){
   console.log("Hubo error ",err);
   
  }
} 
  
async delete(collection,id){
  try{
   return await this.firestore.collection(collection).doc(id).delete();
  }catch(err){
   console.log("Hubo error ",err);
   
  }
}
async update(collection,id,dato){
  try{
   return await this.firestore.collection(collection).doc(id).set(dato);
  }catch(err){
   console.log("Hubo error ",err);
   
  }
}
   
}
