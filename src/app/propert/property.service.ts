import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  propertyId:String;
  ShowModal:Boolean;

  constructor(public db:AngularFireDatabase,private authService:AuthService) { }

  // createUser(value, avatar){
  //   return this.db.collection('users').add({
  //     name: value.name,
  //     nameToSearch: value.name.toLowerCase(),
  //     surname: value.surname,
  //     age: parseInt(value.age),
  //     avatar: avatar
  //   });
  // }

  
  create(property)
  {
    var owner=this.authService.authUser;
    // console.log(owner);
    return this.db.list('owners/'+owner.uid+'/property' ).push({
      owner_email:owner.email,
      propertyName:property.value.pname,
      location:property.value.location,
      rent:property.value.rent,
      leasetime:property.value.leasetime,
      tenant_name:"",
      tenant_email:""
    });
  }
  setShowModal(val){
    this.ShowModal=val;
  }

  getIdDetails(propertyId){
    var owner=this.authService.authUser;
    return this.db.list('owners/'+owner.uid+'/property/'+propertyId);
  }
  
  getAll()
  {
    var owner=this.authService.authUser;
    // console.log(this.db.list('/property'));
    // return this.db.list('/property');
    return this.db.list('owners/'+owner.uid+'/property');
  }

  updateTenant(propertyId, product)
  {
    var owner=this.authService.authUser;
    // console.log(owner);
    return this.db.object('owners/'+owner.uid+'/property/'+propertyId).update({
      tenant_name:product.value.tname,
      tenant_email:product.value.email
    });
  }

  update(propertyId, product)
  {
    var owner=this.authService.authUser;
    // console.log(product);
    return this.db.object('owners/'+owner.uid+'/property/'+propertyId).update(product);
  }

  delete(propertyId):void
  {
    var owner=this.authService.authUser;
    // console.log(propertyId);
    this.db.object('owners/'+owner.uid+'/property/'+propertyId).remove();
  }
  


  get(propertyId)
  {
    return this.db.object('/property/'+propertyId);
  }

}
