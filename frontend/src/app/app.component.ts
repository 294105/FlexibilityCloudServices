import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http'; // Add this
import { FormsModule } from '@angular/forms';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [FormsModule,CommonModule, RouterOutlet, SidebarComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Flexible Cloud Services';
}
