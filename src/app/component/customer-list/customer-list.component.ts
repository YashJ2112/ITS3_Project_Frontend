import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/Customer';
import { CustomersService } from 'src/app/service/customers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers : Customer[];

  constructor(private customerService : CustomersService) { }

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
  }

}
