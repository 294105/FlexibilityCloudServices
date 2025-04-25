import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-trainer-invoices',
  templateUrl: './trainer-invoices.component.html',
  styleUrls: ['./trainer-invoices.component.scss']
})
export class TrainerInvoicesComponent implements OnInit {
  invoices: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getEmployeeInvoices().subscribe((data) => {
      this.invoices = data; // Store the fetched invoices in the invoices array
    });
  }
}
