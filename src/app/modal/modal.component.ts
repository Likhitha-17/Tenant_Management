import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../propert/property.service';
import { Key } from 'protractor';


declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  constructor(public router:Router,public propertyService:PropertyService) { }

  propertyId=this.propertyService.propertyId;
  payment:any[]=[];
  rent:String;
  tname:String;

  ngOnInit(){
    
    this.propertyService.getIdDetails(this.propertyId).snapshotChanges().subscribe(res=>{
      res.forEach(data=>{
        this.payment.push(data);
      });
      this.rent=this.payment[4].payload.val();
      this.tname=this.payment[6].payload.val();
      console.log(this.tname);
    });   
  }


  showModal():void {
    $("#myModal").modal('show');
  }
  sendModal(): void {

    //do something here
    this.hideModal();
    this.router.navigate(['/dashboard']);
  }
  hideModal():void {
    document.getElementById('close-modal').click();
    this.router.navigate(['/dashboard']);
  }

}
