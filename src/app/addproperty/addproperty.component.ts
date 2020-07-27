import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PropertyService } from '../propert/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})

export class AddpropertyComponent implements OnInit {

  constructor(public propertService:PropertyService,private router:Router) { }

  ngOnInit(): void {
  }
  
  createProperty(formData:NgForm){
    
    this.propertService.create(formData).then(
      res=>{
        formData.reset();
        this.router.navigate(['/dashboard']);
      }
    )
    
  }
}

// var details={propertyName:String,
    // location:String,
    // rent:String,
    // leasetime:String}
    
    // propertyName=formData.value.pname;
    // var location=formData.value.location;
    // var rent=formData.value.rent;
    // var leasetime=formData.value.leasetime;
    // onSubmit(value){
    //   this.firebaseService.createUser(value, this.avatarLink)
    //   .then(
    //     res => {
    //       this.resetFields();
    //       this.router.navigate(['/home']);
    //     }
    //   )
    // }
