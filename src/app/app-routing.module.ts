import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsComponent } from './patients/patients.component';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'view-appointment', component: ViewAppointmentsComponent },
  { path: 'schedule-appointment', component: ScheduleAppointmentComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
