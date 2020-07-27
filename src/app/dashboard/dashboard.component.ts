import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { PropertyService } from '../propert/property.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';




@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",  
  styleUrls: ["./dashboard.component.css"],
})



export class DashboardComponent implements OnInit {
  

  details:any[]=[];
  isEdit:false;

  constructor(public authService: AuthService,public propertyService:PropertyService,public db:AngularFireDatabase,public router:Router) {}

  
  ngOnInit(){  
    this.propertyService.getAll().snapshotChanges().subscribe(res=>{
      res.forEach(data=>{
        this.details.push(data);
      });
    });  
  }




   propertyId(p:any){
    this.propertyService.propertyId=p.key;
    this.router.navigate(['/registertenant']);
  }

  showModal(p): void {   
    this.propertyService.propertyId=p.key;
    this.propertyService.setShowModal(true); 
    this.router.navigate(['/modal'])
}
 
  
pname: string;
location: string;
rent: string;
leasetime: string;

EditRecord(Record)
{
  Record.isEdit=true;
  Record.editpname= Record.payload.val()["propertyName"];
  Record.editlocation= Record.payload.val()["location"];
  Record.editrent= Record.payload.val()["rent"];
  Record.editleasetime= Record.payload.val()["leasetime"];
  Record.editowneremail= Record.payload.val()["owner_email"];
  Record.edittenantemail= Record.payload.val()["tenant_email"];
}

Updaterecord(recorddata)
{
  let Record= {};

  Record["propertyName"]=recorddata.editpname;
  Record["location"]=recorddata.editlocation;
  Record["rent"]=recorddata.editrent;
  Record["leasetime"]=recorddata.editleasetime;
  Record["owner_email"]=recorddata.editowneremail;
  Record["tenant_email"]=recorddata.edittenantemail;

  this.propertyService.update(recorddata.key,Record);

  this.details=[];
  recorddata.isEdit=false;
}

remove(record_id):void
{
  this.propertyService.delete(record_id);
  this.details=[];
}
  
}


