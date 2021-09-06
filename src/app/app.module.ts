import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailModule } from "./email/email.module";
import { AAHeaderModule, AAContainerModule } from "@theaa/core-lib";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmailModule,
    AAHeaderModule,
    AAContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
