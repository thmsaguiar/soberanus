import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Venda } from 'src/app/models/Venda';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {

  listaVendas: Venda[] = [];

  constructor(private storageService: StorageService, public router: ActivatedRoute){}

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
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const dataAtual = dia + '/' + mes + '/' + ano+'   Hora: '+hora+':'+min;
    return dataAtual;
  }

  ngOnInit() {
  }

}
