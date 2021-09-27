import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
  public form: FormGroup;

  constructor(public router:Router, private formBuilder: FormBuilder,private alertCtrl: AlertController) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  async goToInitial(){        
    this.user = this.form.get('user').value;
    this.password = this.form.get('password').value;
    if((this.user == this.loginUser.user) && (this.password == this.loginUser.password)){
      this.router.navigateByUrl('/initial');          
    }else{
      const alert = await this.alertCtrl.create({
        header: 'Usuário ou senha inválidos!',
        message: 'Tente novamente.',
        buttons:['OK']
      });
      alert.present();    
    }
    
  }
  goToHome(){
    this.router.navigateByUrl('/home');
  }

}
