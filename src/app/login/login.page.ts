import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginPageForm } from './login.page.form';


//Interface Login
interface ILogin{
  user: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: string;
  public password: string;
  public loginUser: ILogin = {
    user: 'admin',
    password: 'admin'
  };
  form: FormGroup;

  constructor(public router:Router, private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  goToInitial(){        
    this.user = this.form.get('user').value;
    this.password = this.form.get('password').value;
    if((this.user == this.loginUser.user) && (this.password == this.loginUser.password)){
      this.router.navigateByUrl('/home');//mudar para page inicial onde tem os produtos          
    }
    
  }

}
