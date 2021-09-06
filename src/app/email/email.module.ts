import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email.component';
import { AAContainerModule, AAHeaderModule, AAErrorMessageModule, AASharedModule,AAButtonToggleModule} from "@theaa/core-lib";


@NgModule({
  declarations: [
    EmailComponent
  ],
  imports: [
    CommonModule,
    AAContainerModule,
    AAHeaderModule,
    AAErrorMessageModule,
    AASharedModule,
    AAButtonToggleModule
  ]
})
export class EmailModule { }
