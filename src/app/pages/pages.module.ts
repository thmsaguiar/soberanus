import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagesPageRoutingModule } from './pages-routing.module';

import { PagesPage } from './pages.page';

import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';

@NgModule({  
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,    
    PagesPageRoutingModule,
    IonicStorageModule.forRoot({      
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    })
  ],
  declarations: [PagesPage]  
})
export class PagesPageModule {}
