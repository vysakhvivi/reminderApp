import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteremComponent } from './deleterem/deleterem.component';
import { EventformComponent } from './eventform/eventform.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateeventComponent } from './updateevent/updateevent.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'eventform',component:EventformComponent
  },
  {
    path:'updateform/:uid',component:UpdateeventComponent
  },
  {
    path:'deleteevent',component:DeleteremComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
