import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent {
  doctors: any[] = [];

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  addDoctor(name: string, specialization: string) {
    this.http.post('http://localhost:3000/api/doctors', { name, specialization }).subscribe(
      (response: any) => {
        this.doctors.push(response);
        this.snackBar.open('Doctor added successfully', 'Close', { duration: 3000 });
      },
      (error) => {
        console.error('Failed to add a doctor', error);
        this.snackBar.open('Failed to add a doctor', 'Close', { duration: 3000 });
      }
    );
  }
}
