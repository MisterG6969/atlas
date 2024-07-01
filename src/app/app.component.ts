import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = "angular_george"
  url!: string;
  date!: string;
  constructor(private nasaService: NasaService) { }

  ngOnInit() {
    const today = new Date();
    this.date = today.toISOString().split('T')[0];
    this.getApodData();
  }
  onDateChange(event: any) {
    this.date = event.target.value;
    this.getApodData();
  }

  getApodData() {
    this.nasaService.getApodData(this.date).subscribe({
      next: (data) => {
        this.url = data.url;
        console.log('URLs:', this.url);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
}
