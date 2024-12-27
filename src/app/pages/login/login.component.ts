import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FieldsService } from './fields.service';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [NgIf, NgFor, ReactiveFormsModule, RouterLink, UpperCasePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  // VALIDAZIONE
  form =new FormGroup({
    nome: new FormControl('', Validators.required),
    cognome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    eta: new FormControl('', Validators.required),
  })
  

  // CAMPI
  constructor(public fieldsService:FieldsService){
    // console.log(fieldsService.fields, this.form);
  }


  // SUBMIT
  onSubmit(e:FormGroup){
    console.log(e.value)
  }
}
