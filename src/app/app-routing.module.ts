import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//my changes start 
import { MenuComponent } from './my-components/menu/menu.component';
import { DashboardComponent } from './my-components/dashboard/dashboard.component';
import { AllEmployeesComponent } from './my-components/all-employees/all-employees.component';
//my changes end

const routes: Routes = [
  //my changes start
  { path:'menu-component', component:MenuComponent },
  { path:'dashboard-component',component:DashboardComponent },
  { path:'allemployees-component', component:AllEmployeesComponent }
  //my changes end
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
