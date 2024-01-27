import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.css']
})
export class PieChartsComponent {
  pieChart= new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },

    credits: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Diseases',
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        type: 'pie',
        data: [
          {name: 'COVID 19', y: 1, color: '#F7D08A'},
          {name: 'HIV/AIDS', y: 2, color: '#E3F09B'},
          {name: 'EBOLA', y: 3, color: '#87B6A7'},
          {name: 'DISPORA', y: 4, color: '#5B5941'},
          {name: 'DIABETES', y: 5, color: '#F79F79'},
        ],
      },
    ],
  })
}
