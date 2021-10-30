/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  //armaneza instancia do Storage
  private _storage: Storage | null = null;

  //instancia Storage
  constructor(private storage: Storage) { 
    this.init();
  }

  //cria o banco de dados
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //armazenar o dado
  public set(key: string, value: any){
    this._storage?.set(key, value);
  }

  //busca um dado
  public get(key: string){
    this._storage?.get(key);
  }

  //remover o dado
  public remove(key: string){
    this._storage?.remove(key);
  }  

  //pegar todos os dados
  public getAll(){
    const lista = [];
    this._storage.forEach((value, key, index) => {
      lista.push(value);
    });
    return lista;
  }  
}
