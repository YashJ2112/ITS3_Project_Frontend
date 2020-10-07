import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CUSTOMERS } from './mock-customers';
import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  libraryURL = environment.libraryApiURL;

  constructor(private http: HttpClient) { }

  getCustomers(): Customer[]{
    return CUSTOMERS;
  }
}
