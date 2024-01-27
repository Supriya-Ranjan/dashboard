import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular-highcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PieChartsComponent } from './pie-charts/pie-charts.component';
import { LineChartsComponent } from './line-charts/line-charts.component';
import { GaugeComponent } from './gauge/gauge.component';
import { ColumnComponent } from './column/column.component';
import { SunburstComponent } from './sunburst/sunburst.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PieChartsComponent,
    LineChartsComponent,
    GaugeComponent,
    ColumnComponent,
    SunburstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
