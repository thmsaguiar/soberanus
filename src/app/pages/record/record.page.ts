import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/Product';
import { Venda } from 'src/app/models/Venda';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {

  listaVendas: Venda[] = [];

  constructor(private storageService: StorageService){}
  
  async buscarVendas(){
    this.listaVendas = await this.storageService.getAll();  
  }

  ionViewDidEnter(){
    this.buscarVendas();
  }

  async excluirVenda(id: string){
    await this.storageService.remove(id);
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
  }

}
