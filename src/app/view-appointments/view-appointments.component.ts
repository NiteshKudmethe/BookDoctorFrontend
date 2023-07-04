import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css']
})
export class ViewAppointmentsComponent {

  appointments: any[] = [];

  selectedDate: Date = new Date();

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
this.getAppointmentsByDate(this.selectedDate);
  }

  getAppointmentsByDate(date: Date) {
    const formattedDate = date.toISOString().split('T')[0]; // Convert date to string format 'YYYY-MM-DD'
    this.http.get('http://localhost:3000/appointments', { params: { date: formattedDate } }).subscribe(
      (response: any) => {
        this.appointments = response;
        console.log(this.appointments);
      },
      (error) => {
        console.error('Failed to get appointments', error);
        this.snackBar.open('Failed to get appointments', 'Close', { duration: 3000 });
      }
    );
  }


}
