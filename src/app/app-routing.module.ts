import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//my changes start 
import { MenuComponent } from './my-components/menu/menu.component';
import { DashboardComponent } from './my-components/dashboard/dashboard.component';
import { AllEmployeesComponent } from './my-components/all-employees/all-employees.component';
import { DefaultScreenComponent } from './my-components/default-screen/default-screen.component';
import { AddEmployeeComponent } from './my-components/add-employee/add-employee.component';
//my changes end

const routes: Routes = [
  //my changes start
  { path:'menu-component', component:MenuComponent },
  { path:'dashboard-component',component:DashboardComponent },
  { path:'allemployees-component', component:AllEmployeesComponent },
  { path:'',component:DefaultScreenComponent },
  { path:'addemployee-component', component:AddEmployeeComponent }
  //my changes end
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
