import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { CustomLanguageOperationsPipe } from '@app/@core/pipes/languages/custom-language-operations.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,

    TranslateModule
  ],
  declarations: [
    HomePage,

    // PIPES
    CustomLanguageOperationsPipe
  ]
})
export class HomePageModule {}
