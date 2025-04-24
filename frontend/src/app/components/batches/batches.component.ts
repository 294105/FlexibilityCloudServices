import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';  // Import CommonModule for pipes and directives

@Component({
  selector: 'app-batches',
  standalone: true,  // Mark the component as standalone
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.scss'],
  imports: [CommonModule],  // Include CommonModule here
})
export class BatchesComponent implements OnInit {
  upcomingBatches: any[] = [];
  ongoingBatches: any[] = [];
  completedBatches: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUpcomingBatches();
    this.getOngoingBatches();
    this.getCompletedBatches();
  }

  // Fetch upcoming batches
  getUpcomingBatches(): void {
    this.http.get<any[]>('http://localhost:3000/api/batches/upcoming')
      .subscribe(data => {
        this.upcomingBatches = data;
      }, error => {
        console.error('Error fetching upcoming batches:', error);
      });
  }

  // Fetch ongoing batches
  getOngoingBatches(): void {
    this.http.get<any[]>('http://localhost:3000/api/batches/ongoing')
      .subscribe(data => {
        this.ongoingBatches = data;
      }, error => {
        console.error('Error fetching ongoing batches:', error);
      });
  }

  // Fetch completed batches
  getCompletedBatches(): void {
    this.http.get<any[]>('http://localhost:3000/api/batches/completed')
      .subscribe(data => {
        this.completedBatches = data;
      }, error => {
        console.error('Error fetching completed batches:', error);
      });
  }
}
