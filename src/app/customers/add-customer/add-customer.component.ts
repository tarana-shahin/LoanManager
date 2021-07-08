import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CustomerService } from 'src/app/shared/customer.service';

declare var M: any;

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
  providers: [CustomerService]
})
export class AddCustomerComponent implements OnInit {
   
  constructor(public customerService:CustomerService) { }

  ngOnInit(): void {
    this.resetForm();
  }
    resetForm(form?:NgForm){
        if(form)
        form.reset();
        this.customerService.selectedCustomer={
          _id: "",
    firstname: "",
    lastname: "",
    phoneNumber: 0,
    emailAdress: "",
    Address: "",
        }
    }

    onSubmit(form:NgForm)
    {
         console.log(form.value);  
      this.customerService.postCustomers(form.value).subscribe((res) => {
        this.resetForm(form);
        
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
}
