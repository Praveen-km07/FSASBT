import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {

  //create an array of objects
  salesPersonList:SalesPerson[] =[
    new SalesPerson("Arun","Jain","arunjain@gmail.com",50000),
    new SalesPerson("Ajana","pm","anjanapm@gmail.com",60000),
    new SalesPerson("Abc","aa","abcaa@gmail.com",40000),
    new SalesPerson("Xyz","xx","xyzxx@gmail.com",30000),
  ];

}
