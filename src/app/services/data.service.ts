import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }


  getData(){
    return this.httpClient.get('http://127.0.0.1:5000/api/v1/contacts/');
  }

  insertData(data){
    return this.httpClient.post('http://127.0.0.1:5000/api/v1/contacts/', data);  
  }

}
