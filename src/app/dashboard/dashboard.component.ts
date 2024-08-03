import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
  export class DashboardComponent {
    Highcharts: typeof Highcharts = Highcharts;
    
    chartOptions1: Highcharts.Options = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Monthly Revenue'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Revenue'
        }
      },
      series: [{
        name: 'Revenue',
        type: 'line',
        data: [1000, 1200, 1500, 1700, 2000, 2200, 2100, 2300, 2500, 2700, 3000, 3200]
      }]
    };
  
    chartOptions2: Highcharts.Options = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'User Signups by Month'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Signups'
        }
      },
      series: [{
        name: 'Signups',
        type: 'line',
        data: [30, 40, 50, 70, 60, 80, 90, 100, 110, 120, 130, 140]
      }]
    };
  }
