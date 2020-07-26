import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  dataArr:any;
  dataAlert:any;
  contact = new Contact();
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  	this.getContactsData();
  }


  getContactsData()
  {
  	this.dataService.getData().subscribe(res=>{
  		this.dataArr=res;
  	});
  }	


  insertContactData()
  {
	this.dataService.insertData(this.contact).subscribe(res=>{
  		this.getContactsData();
      this.dataAlert = "Created Contact!";
  	},
    erro=>{ 
      if(erro.status == 400) {
        this.dataAlert = erro.error;
      }
  });
  }
  
}
