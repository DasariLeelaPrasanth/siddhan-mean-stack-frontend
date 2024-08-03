// src/app/analytics/analytics.component.ts
import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
  Highcharts: typeof Highcharts = Highcharts;
  
  // Pie Chart Options
  pieChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Product Distribution'
    },
    series: [{
      name: 'Products',
      type: 'pie',
      data: [
        ['Product A', 50],
        ['Product B', 30],
        ['Product C', 20]
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

  // Column Chart Options
  columnChartOptions: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Monthly Sales'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Sales'
      }
    },
    series: [{
      name: 'Sales',
      type: 'column',
      data: [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650]
    }]
  };

  // Area Chart Options
  areaChartOptions: Highcharts.Options = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'Cumulative Sales'
    },
    xAxis: {
      categories: ['Q1', 'Q2', 'Q3', 'Q4']
    },
    yAxis: {
      title: {
        text: 'Sales'
      }
    },
    series: [{
      name: 'Sales',
      type: 'area',
      data: [500, 1000, 1500, 2000]
    }]
  };

  // Scatter Plot Options
  scatterPlotOptions: Highcharts.Options = {
    chart: {
      type: 'scatter'
    },
    title: {
      text: 'Customer Segmentation'
    },
    xAxis: {
      title: {
        text: 'Age'
      }
    },
    yAxis: {
      title: {
        text: 'Income'
      }
    },
    series: [{
      name: 'Customers',
      type: 'scatter',
      data: [
        [30, 40000],
        [40, 60000],
        [50, 70000],
        [60, 80000]
      ]
    }]
  };

  // Bubble Chart Options
  bubbleChartOptions: Highcharts.Options = {
    chart: {
      type: 'bubble'
    },
    title: {
      text: 'Product Comparison'
    },
    xAxis: {
      title: {
        text: 'Product A'
      }
    },
    yAxis: {
      title: {
        text: 'Product B'
      }
    },
    series: [{
      name: 'Products',
      type: 'bubble',
      data: [
        [1, 1, 10],
        [2, 2, 20],
        [3, 3, 30]
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

  // Gauge Chart Options
  gaugeChartOptions: Highcharts.Options = {
    chart: {
      type: 'gauge'
    },
    title: {
      text: 'Performance Gauge'
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: 'Performance'
      }
    },
    series: [{
      name: 'Performance',
      type: 'gauge',
      data: [75]
    }]
  };
}
