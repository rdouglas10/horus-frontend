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

  deleteData(id){
    return this.httpClient.delete('http://127.0.0.1:5000/api/v1/contacts/'+id);  
  }

  getOneData(id){
    return this.httpClient.get('http://127.0.0.1:5000/api/v1/contacts/'+id);
  }

  UpdateData(id,data){
    return this.httpClient.put('http://127.0.0.1:5000/api/v1/contacts/'+id, data);  
  }
}
