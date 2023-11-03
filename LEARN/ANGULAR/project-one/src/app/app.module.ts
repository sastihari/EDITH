import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { HttpClientModule } from '@angular/common/http';
import { MyServeService } from './myserve.service';
import { FormsModule } from '@angular/forms';
import { FormvalideComponent } from './formvalide/formvalide.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    
    FormvalideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [MyServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
