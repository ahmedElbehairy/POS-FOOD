import { Component } from '@angular/core';

@Component({
  selector: 'app-creat-order',
  templateUrl: './creat-order.component.html',
  styleUrl: './creat-order.component.scss',
})
export class CreatOrderComponent {
  // inputForm:InputForm = [{
  inputForm: any[] = [
    { id: 'Name_Customer', ng_model: '', placeHolder: '', label: 'Name Customer :'},
    { id: 'Gender_Customer', ng_model: '', placeHolder: '', label: 'Gender :'},
    { id: 'City_Customer', ng_model: '', placeHolder: '', label: 'City :'},
    { id: 'Phone_Customer', ng_model: '', placeHolder: '', label: 'Phone Number :'},
    { id: 'Email_Customer', ng_model: '', placeHolder: '', label: 'Email Address :'},
    { id: 'Id_Customer', ng_model: '', placeHolder: '', label: 'Customer ID :'},
  ];

  constructor() {}

  ngSubmit(Customer: any) {}
}
