import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventformComponent } from './eventform/eventform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteeventComponent } from './deleteevent/deleteevent.component';
import { UpdateeventComponent } from './updateevent/updateevent.component';
import { AlertmsgComponent } from './alertmsg/alertmsg.component';
import { DeleteremComponent } from './deleterem/deleterem.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    EventformComponent,
    DeleteeventComponent,
    UpdateeventComponent,
    AlertmsgComponent,
    DeleteremComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
