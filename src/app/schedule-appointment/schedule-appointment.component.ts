import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css']
})
export class ScheduleAppointmentComponent {
  appointments: any[] = [];
  doctors: any[] = [];
  patients: any[] = [];
  selectedDate: Date = new Date();

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.getPatients();
    this.getDoctors();
    this.getAppointments();
  }

  scheduleAppointment(patientId: string, date: string) {
    this.http.post('http://localhost:3000/api/appointments', { patientId, date }).subscribe(
      (response: any) => {
        this.appointments.push(response);
        this.snackBar.open('Appointment scheduled successfully', 'Close', { duration: 3000 });
      },
      (error) => {
        console.error('Failed to schedule an appointment', error);
        this.snackBar.open('Failed to schedule an appointment', 'Close', { duration: 3000 });
      }
    );
  }

  getPatients() {
    this.http.get('http://localhost:3000/api/patients').subscribe(
      (response: any) => {
        this.patients = response;
      },
      (error) => {
        console.error('Failed to get patients', error);
        this.snackBar.open('Failed to get patients', 'Close', { duration: 3000 });
      }
    );
  }

  getDoctors() {
    this.http.get('http://localhost:3000/doctors').subscribe(
      (response: any) => {
        this.doctors = response;
      },
      (error) => {
        console.error('Failed to get doctors', error);
        this.snackBar.open('Failed to get doctors', 'Close', { duration: 3000 });
      }
    );
  }

  getAppointments() {
    this.http.get('http://localhost:3000/api/appointments').subscribe(
      (response: any) => {
        this.appointments = response;
      },
      (error) => {
        console.error('Failed to get appointments', error);
        this.snackBar.open('Failed to get appointments', 'Close', { duration: 3000 });
      }
    );
  }

  getAppointmentsByDate(date: Date) {
    const formattedDate = date.toISOString().split('T')[0]; // Convert date to string format 'YYYY-MM-DD'
    this.http.get('http://localhost:3000/api/appointments', { params: { date: formattedDate } }).subscribe(
      (response: any) => {
        this.appointments = response.map((appointment: any) => {
          return { date: appointment.date.toISOString().split('T')[0] };
        });
        console.log(this.appointments);
      },
      (error) => {
        console.error('Failed to get appointments', error);
        this.snackBar.open('Failed to get appointments', 'Close', { duration: 3000 });
      }
    );
  }

  dateFilter = (date: Date | null): boolean => {
    if (!date) return false; // Disable date selection if no date is chosen
    const formattedDate = date.toISOString().split('T')[0];
    return !this.appointments.some(appointment => appointment.date === formattedDate);
  }

  dateClass = (date: Date): string => {
    const formattedDate = date.toISOString().split('T')[0];
    return this.appointments.some(appointment => appointment.date === formattedDate) ? 'booked-date' : '';
  };


}
