import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  invoices: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getInvoices().subscribe(data => {
      this.invoices = data;
    });
  }

  downloadInvoice(invoiceNumber: string) {
    const url = `http://localhost:3000/api/invoices/invoices/download/${invoiceNumber}`;
    window.open(url, '_blank');
  }
}
