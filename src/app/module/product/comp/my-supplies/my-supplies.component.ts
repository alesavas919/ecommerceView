import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-supplies',
  templateUrl: './my-supplies.component.html',
  styleUrls: ['./my-supplies.component.scss']
})
export class MySuppliesComponent implements OnInit {
  product = new FormGroup({
    description:new FormControl(''),
    details:new FormControl(''),
    name:new FormControl(''),
    cost:new FormControl(''),
  })
  productList:any[] = []
  constructor() { }
  ngOnInit(): void {
  }

}
