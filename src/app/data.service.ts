import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  cars = [
    'Ford', 'Maruti', 'BMW'
  ];

  myData(){
    return 'This is my Data';
  }
}
