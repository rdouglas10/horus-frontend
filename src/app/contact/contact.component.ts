import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  dataArr:any;
  dataAlert:any;
    
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


}
