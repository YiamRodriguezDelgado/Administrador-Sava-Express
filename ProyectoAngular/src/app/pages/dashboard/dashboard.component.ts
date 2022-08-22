import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { AdminDataService } from 'src/app/services/admin-data.service';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from '../../variables/charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public user:any;
  public totalPackageDelivered:any;
  public datasets: any;
  public data: any;
  public salesChart;
  public months=[];
  public sent=[]
  public clicked = true;
  public clicked1 = false;
  constructor(private _petitions: AdminDataService) { }
  ngOnInit() {



    this._petitions.obtainClients().subscribe((totalClients:any)=>{
      this.user=totalClients.payload.current_month
    })
    this._petitions.obtainPackages().subscribe((totalPackages:any)=>{
      this.totalPackageDelivered=totalPackages.payload.current_month
    })
    this._petitions.obtainStadistics().subscribe((stadistics:any)=>{
      for (const [key, value] of Object.entries(stadistics)) {
        this.months.push(key)
        this.sent.push(value)
      }
      this.data = {
        labels: this.months,
        datasets: [
          {
            label: 'Paquetes Enviados',
            data: this.sent,
            maxBarThickness: 10
          }
        ]
      }
      const chartOrders = document.getElementById('chart-orders');
      parseOptions(Chart, chartOptions());
      const ordersChart = new Chart(chartOrders, {
        type: 'bar',
        options: chartExample2.options,
        data: this.data,
      });
    })
  }
  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
