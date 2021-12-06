import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {

  constructor(private alertCtrl: AlertController, public router: Router) { }

  ngOnInit() {
  }

  async exit(){
    const alert = await this.alertCtrl.create({
      header: 'Finalizando sessão!',
      message: 'Deseja realmente sair?',
      buttons: [
      {
        text: 'Não',
        role: 'cancel'
      },
      {
        text: 'Sim',
        handler: () => {
          this.router.navigateByUrl('/home');
        }
      }
    ]
    });
    alert.present();
  }

}
