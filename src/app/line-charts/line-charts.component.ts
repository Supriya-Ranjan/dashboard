import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
//import * as Highcharts from 'highcharts/highstock';

@Component({
  selector: 'app-line-charts',
  templateUrl: './line-charts.component.html',
  styleUrls: ['./line-charts.component.css'],
  // template: `
  //   <button (click)="add()">Add Point!</button>
  //   <div [chart]="chart"></div>
  // `
})
export class LineChartsComponent {
  lineChart = new Chart({
    chart: { 
      type: 'line' 
    },
    title: {
      text: 'Patients'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Patients admitted',
        data: [10, 2, 3, 6, 9, 17, 20, 10, 5, 2, 16]
      } as any
    ]
  });

  // add() {
  //   this.lineChart.addPoint(Math.floor(Math.random() * 10));
  // }

  // chartOptions: any;
  // highcharts: typeof Highcharts = Highcharts;

  // constructor() {}

  // ngOnInit(): void {
  //   this.barChart();
  // }

  // barChart(){
  //   this.chartOptions = {
  //     chart:{
  //       type: 'column'
  //     },
  //     title:{
  //       text: 'xyz'
  //     },
  //     subtitle:{
  //       text: 'xyzzzz'
  //     },
  //     xAxis:{
  //       categories:[
  //         "Jan", "feb", "mar", "apr"
  //       ]
  //     },

  //     series: this.chartData
  //   }
  // }


  // //high chart data
  // chartData = [
  //   {
  //     name: 'year 1990',
  //     data: [631, 727, 3202, 721]
  //   },
  //   {
  //     name: 'year 2000',
  //     data: [814, 841, 3714, 726]
  //   },
  //   {
  //     name: 'year 2018',
  //     data: [1276, 1007, 4561, 746]
  //   }
  // ]
}
