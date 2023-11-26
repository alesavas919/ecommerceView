import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register = new FormGroup({
    address:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    cellphone:new FormControl(''),
    city:new FormControl(''),
    company_name:new FormControl(''),
    country:new FormControl(''),
    details:new FormControl(''),
    location:new FormControl(''),
    name:new FormControl(''),
  })
  constructor() { }

  ngOnInit(): void {
  }

}
