import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientsComponent } from './patients/patients.component';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';
import { NgChartsModule } from 'ng2-charts';
import { DoctorsComponent } from './doctors/doctors.component';
import { MatDateSelectionModel, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientsComponent,
    ScheduleAppointmentComponent,
    DoctorsComponent,
    ViewAppointmentsComponent
  ],
  imports: [
    NgChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    AppRoutingModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,




  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
