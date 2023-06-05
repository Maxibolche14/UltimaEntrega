import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
/* import { Router } from '@angular/router'; */
import { SesionUserService } from 'src/app/core/services/sesion-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    private sesionUserService: SesionUserService,

  ) {
    this.formLogin = new FormGroup({
      userName: new FormControl('',[Validators.required]),
      userPass: new FormControl('',[Validators.required]),
      userAdmin: new FormControl(false)
    })
   //Fin Constructor
  }

  ngOnInit(): void {
  }

  login(){

    this.sesionUserService.checkUser(this.formLogin.value.userName, this.formLogin.value.userPass);

  }

}
