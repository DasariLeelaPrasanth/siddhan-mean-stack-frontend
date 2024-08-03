// src/app/reports/reports.component.ts
import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  Highcharts: typeof Highcharts = Highcharts;
  
  // Pie Chart Options
  pieChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Sales Distribution'
    },
    series: [{
      name: 'Sales',
      type: 'pie',
      data: [
        ['Product A', 50],
        ['Product B', 30],
        ['Product C', 20]
      ]
    }]
  };

  // Donut Chart Options
  donutChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Market Share'
    },
    plotOptions: {
      pie: {
        innerSize: '50%' // Defines the donut size
      }
    },
    series: [{
      name: 'Market Share',
      type: 'pie',
      data: [
        ['Brand X', 60],
        ['Brand Y', 25],
        ['Brand Z', 15]
      ]
    }]
  };

  // Bar Chart Options
  barChartOptions: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Sales by Region'
    },
    xAxis: {
      categories: ['North America', 'Europe', 'Asia', 'Australia']
    },
    yAxis: {
      title: {
        text: 'Sales'
      }
    },
    series: [{
      name: 'Sales',
      type: 'bar',
      data: [1500, 2000, 1800, 1600]
    }]
  };

  // Line Chart Options
  lineChartOptions: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Monthly Revenue Trend'
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
}
