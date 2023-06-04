import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {

  //create an array of objects
  salesPersonList:SalesPerson[] =[
    new SalesPerson("Test","User1","testuser1@gmail.com",50000),
    new SalesPerson("Test","User2","testuser2@gmail.com",60000),
    new SalesPerson("Test","User3","testuser3@gmail.com",40000),
    new SalesPerson("Test","User4","testuser4@gmail.com",30000),
  ];

}
