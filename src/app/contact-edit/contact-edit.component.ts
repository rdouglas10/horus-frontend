import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Contact } from '../contact/contact.model';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.less']
})
export class ContactEditComponent implements OnInit {
 id:any;
 data:any;

  contact = new Contact();
  constructor( 
  	private route:ActivatedRoute,
  	private dataService:DataService ) { }

  ngOnInit(): void{
  	this.id = this.route.snapshot.params.id;
  	this.getData();
  }

  getData(){
  	this.dataService.getOneData(this.id).subscribe(res=>{
  		this.data=res;
  		this.contact=this.data;
  	});
  }


}
