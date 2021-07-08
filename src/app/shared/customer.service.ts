import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  selectedCustomer: Customer = new Customer;
  customers: Customer[] = [];
  readonly baseURL = 'http://localhost:3000/customers';
  constructor(private http: HttpClient) { }

  getCustomers(){
    return this.http.get(this.baseURL);
  }

  postCustomers(emp: Customer) {
    console.log("Inside post");
    console.log(emp);
    return this.http.post(this.baseURL, emp);
  }

}
