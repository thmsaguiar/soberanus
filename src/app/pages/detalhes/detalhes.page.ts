import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/models/Product';
import { Venda } from 'src/app/models/Venda';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  public id: string;

  public rota: ActivatedRoute;
  
  listaVendas: Venda[] = [];

  venda: Venda = new Venda();

  constructor(private storageService: StorageService, router: ActivatedRoute){
    this.rota = router;
  }
  
  async buscarVendas(){    
    this.listaVendas = await this.storageService.getAll();     
  }

  ionViewDidEnter(){
    this.buscarVendas();
  }

  gerarData(data: Date){
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    var hora = data.getHours();
    var min = data.getMinutes();
    var dataAtual = dia + '/' + mes + '/' + ano+'   Hora: '+hora+':'+min;
    return dataAtual;
  }

  ngOnInit() {
    this.id = this.rota.snapshot.paramMap.get('id');    
  }

}
