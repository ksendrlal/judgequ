import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './pages/admin/registration/registration.component';
import {AppRoutingModule} from "./app-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './shared/home/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { CreatecompetitionComponent } from './pages/admin/createcompetition/createcompetition.component';
import { NewsComponent } from './shared/news/news.component';
import { DressageComponent } from './pages/judge/dressage/dressage.component';
import { ShowjumpingComponent } from './pages/judge/showjumping/showjumping.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    HeaderComponent,
    CreatecompetitionComponent,
    NewsComponent,
    DressageComponent,
    ShowjumpingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
