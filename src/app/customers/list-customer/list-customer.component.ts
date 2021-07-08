import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
// import {MatDialogModule} from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';

import { Customer } from 'src/app/shared/customer.model';
import { AddCustomerComponent } from '../add-customer/add-customer.component';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css'],
  providers: [CustomerService]
})
export class ListCustomerComponent implements OnInit {
  // CustomerResult:any;
  // CustomerList:any;
  // public dialog:MatDialog

  constructor(public customerService:CustomerService,
    public dialog:MatDialog
    
   ) { }
   
  // displayedColumns: string[] = ['fullName', 'email', 'mobile', 'city', 'departmentName','actions'];
  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.getCustomerList();
  }
    getCustomerList(){
      this.customerService.getCustomers().subscribe(
        (res) =>{
          this.customerService.customers= res as Customer[];
          console.log(this.customerService.customers);
        }
      );
    }

    onCreate()
    {
      //  this.dialog.open(AddCustomerComponent);
      console.log("tarana");
      this.dialog.open(AddCustomerComponent);
    }
    onCheckk()
    {
      console.log("just checking");
    }
    onSave()
    {
      console.log("stucked here for long");
      const Dialogconfig=new MatDialogConfig();
      // Dialogconfig.disableClose=true;
      // Dialogconfig.autoFocus=true;
      Dialogconfig.width="70%";
      this.dialog.open(AddCustomerComponent,Dialogconfig);
    }

}


