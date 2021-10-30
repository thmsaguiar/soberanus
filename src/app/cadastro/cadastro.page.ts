import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { comparaValidator } from './../validators/compara-validator';
import { Usuario } from './../models/Usuario';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  formCadastro: FormGroup;   

  usuario: Usuario = new Usuario();  

  listaUser: Usuario[] = [];

  constructor(public route:Router, private formBuilder: FormBuilder, private alertCtrl: AlertController, private storageService: StorageService) { 
    this.formCadastro = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: comparaValidator('password', 'confirmPassword')
    });
  }

  ngOnInit() {
  }

  async save(){
    var tem = false;
    if(this.formCadastro.valid){
      for(let users of this.listaUser){
        if(users.user == this.usuario.user){
          tem = true;
        }
      }
      if(tem == false){
        this.usuario.user = this.formCadastro.value.user;
        this.usuario.password = this.formCadastro.value.password;
        await this.storageService.set(this.usuario.user, this.usuario);
        const alert = await this.alertCtrl.create({
          header: 'Cadastrado!',
          message: 'Usuário cadastrado com sucesso.',
          buttons:['OK']
        });
        alert.present();         
        this.route.navigateByUrl('/login'); 
      }else{
        const alert = await this.alertCtrl.create({
          header: 'Usuário já cadastrado!',
          message: 'Por favor utilize outro nome de usuário.',
          buttons:['OK']
        });
        alert.present();
      } 
    }else{
      alert('Formulário inválido!');
    }
  }

  async buscarUsuarios(){
    this.listaUser = await this.storageService.getAll();
  }

  ionViewDidEnter(){
    this.buscarUsuarios();
  }  

}
