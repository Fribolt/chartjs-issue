import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled1';

  constructor() {
  }

  doughnutChartLabels: string[] = [];
  doughnutChartData: number[] = [];
}
