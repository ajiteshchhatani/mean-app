import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  private User = {
    firstname: '',
    lastname: ''
  }

  constructor(private http: HttpClient) { }

  getFormDetails(){
    return this.http.get('http://localhost:3000/get-user-info');
  }

  postFormDetails(firstname, lastname){
    console.log(firstname, lastname);
    this.User.firstname = firstname;
    this.User.lastname = lastname
    return this.http.post('http://localhost:3000/post-user-info', this.User);
  }
}
