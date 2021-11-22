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

  public srcqrcode: string;

  constructor(private storageService: StorageService, router: ActivatedRoute) {
    this.rota = router;
  }

  async buscarVendas() {
    this.listaVendas = await this.storageService.getAll();
  }

  ionViewDidEnter() {
    this.buscarVendas();
    this.gerarQrCode();
  }

  gerarData(data: Date) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const dataAtual = dia + '/' + mes + '/' + ano + '   Hora: ' + hora + ':' + min;
    return dataAtual;
  }

  gerarQrCode() {
    const conteudo = 'https://forms.gle/F8GNDSuekLubj8YJ7';
    const googleApiURL = 'https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=';
    this.srcqrcode = googleApiURL + conteudo;
  }

  ngOnInit() {
    this.id = this.rota.snapshot.paramMap.get('id');
  }

}
