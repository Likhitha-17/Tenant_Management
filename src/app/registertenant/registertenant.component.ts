import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PropertyService } from '../propert/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registertenant',
  templateUrl: './registertenant.component.html',
  styleUrls: ['./registertenant.component.css']
})
export class RegistertenantComponent implements OnInit {


  constructor(public propertyService:PropertyService,public router:Router) { }

  ngOnInit(): void {
  }

  registerTenant(formData:NgForm){
    // console.log("this is data",formData.value.email);
    console.log(this.propertyService.propertyId);
    this.propertyService.updateTenant(this.propertyService.propertyId,formData).then(
      res=>{
        formData.reset();
        this.router.navigate(['/dashboard']);
      }
    )
    // this.propertyService.create(formData).then(
    //   res=>{
    //     formData.reset();
    //     this.router.navigate(['/dashboard']);
    //   }
    // )

  }
}
