import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/trainer-dashboard.service';

@Component({
  selector: 'app-trainer-dashboard',
  templateUrl: './trainer-dashboard.component.html',
  styleUrls: ['./trainer-dashboard.component.scss']
})
export class TrainerDashboardComponent implements OnInit {
  earningsSummary: any = {};
  recentBatches: any[] = [];
  recentInvoices: any[] = [];

  constructor(private dashboardService: DashboardService, private router: Router) {}

  ngOnInit() {
    this.dashboardService.getEarningsSummary().subscribe(data => this.earningsSummary = data);
    this.dashboardService.getRecentBatches().subscribe(data => this.recentBatches = data);
    this.dashboardService.getRecentInvoices().subscribe(data => this.recentInvoices = data);
  }

  viewAllInvoices() {
    this.router.navigate(['/invoices']);
  }

  viewAllBatches() {
    this.router.navigate(['/batches']);
  }

  formatPeriod(period: string): string {
    const map: any = {
      lastMonth: 'Last Month',
      lastQuarter: 'Last Quarter',
      lastYear: 'Last Year',
      lifetime: 'Lifetime'
    };
    return map[period] || period;
  }
}
