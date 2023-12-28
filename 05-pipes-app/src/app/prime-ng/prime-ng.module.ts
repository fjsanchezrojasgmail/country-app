import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';






@NgModule({

  exports: [
    ButtonModule,MenuModule,MenubarModule,InputTextModule
  ]

})
export class PrimeNgModule { }
