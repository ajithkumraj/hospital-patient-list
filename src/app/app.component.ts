import { Component, ViewChild, AfterViewInit ,OnInit} from '@angular/core';
import { MatSort } from '@angular/material/sort';

import { MatTableDataSource } from '@angular/material/table';

export interface UserData  {
  // day = new Date();
  // cur= 1500;
  // num= 123456789.45;

  name: string;
  id: number;
  age: number;
  gender: string;
  disease: string;
 
}
 const Day = new Date();


const ELEMENT_DATA: UserData[] = [
  { id: 1, name: 'ajith', age: 18, gender: 'male', disease: 'fever' },
  { id: 2, name: 'risha', age: 20, gender: 'female', disease: 'cancer'},
  { id: 3, name: 'karthi', age: 31, gender: 'male', disease: 'cold' },
  { id: 4, name: 'priya', age: 43, gender: 'female', disease: 'cold' },
  { id: 5, name: 'raj', age: 59, gender: 'male', disease: 'headpain' },
  { id: 6, name: 'nishanth', age: 23, gender: 'male', disease: 'tengu' },
  { id: 7, name: 'janavi', age: 33, gender: 'female', disease: 'cancer' },
  { id: 8, name: 'kiruba', age: 25, gender: 'male', disease: 'corona' },
  { id: 9, name: 'vaishnavi', age: 65, gender: 'female', disease: 'cancer'},
  { id: 10, name: 'kavin', age: 19, gender: 'male', disease: 'tengu' },
];
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'age', 'gender', 'disease'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}

function ngOninit() {
throw new Error('Function not implemented.');
}
