import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { comparaValidator } from './../validators/compara-validator';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  formCadastro: FormGroup;   

  constructor(public router:Router, private formBuilder: FormBuilder, private alertCtrl: AlertController) { 
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
    console.log('Formulário: ', this.formCadastro.valid);
    
    const alert = await this.alertCtrl.create({
        header: 'Cadastrado!',
        message: 'Usuário cadastrado com sucesso.',
        buttons:['OK']
      });
      alert.present(); 
    this.router.navigateByUrl('/login');   
  }

}
