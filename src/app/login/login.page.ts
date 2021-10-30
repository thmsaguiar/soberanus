import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginPageForm } from './login.page.form';

import { Usuario } from './../models/Usuario';
import { StorageService } from './../services/storage.service';


//Interface Login
/*interface ILogin{
  user: string;
  password: string;
}*/

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {  

  public form: FormGroup;

  usuario: Usuario = new Usuario();

  listaUser: Usuario[] = [];

  public valido = false;  

  constructor(public router:Router, private formBuilder: FormBuilder,private alertCtrl: AlertController, private storageService: StorageService) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  async goToInitial(){     
    this.verificarUser();   
    if(this.valido == true){
      this.router.navigateByUrl('/pages/initial');      
    }            
  }  

  async verificarUser(){    
    this.usuario.user = this.form.get('user').value;
    this.usuario.password = this.form.get('password').value;
    var tem = false;            
    for(let users of this.listaUser){
      if(users.user == this.usuario.user){
        tem = true;
        if(users.password == this.usuario.password){
          this.valido = true;
        }else{
          const alert = await this.alertCtrl.create({
            header: 'Senha inválida!',
            message: 'Tente novamente.',
            buttons:['OK']
          });
          alert.present();    
        }
      }
    }
    if(tem == false){
      const alert = await this.alertCtrl.create({
        header: 'Usuário inválido!',
        message: 'Este usuário não está cadastrado.',
        buttons:['OK']
      });
      alert.present();    
    }    
  }

  async buscarUsuarios(){
    this.listaUser = await this.storageService.getAll();
  }

  ionViewDidEnter(){
    this.buscarUsuarios();
  }

}
