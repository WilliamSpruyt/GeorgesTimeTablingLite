
import { MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { StatsService } from '../services/stats.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { Stat } from '../stat'
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  statsArray: Stat[] = [];
  dataSource = null;
  displayedColumns = ['name', 'date', 'numQs', 'time', 'avTime'];
  constructor(private statService: StatsService) { }

  ngOnInit() {

    this.statService.getStats()
      .subscribe(message => {
        this.statsArray = message
        this.dataSource = new MatTableDataSource(this.statsArray)
        this.dataSource.sort = this.sort;
        console.log('!!!! the stats array in component init ' + this.statsArray[0])
      })
      console.log('after fail!!!! the stats array in component init ' + this.statsArray[0])
  }

}
export class StatsDataSource extends DataSource<any> {
  constructor(private statService: StatsService) {
    super();
  }
  connect(): Observable<Stat[]> {
    return this.statService.getStats();
  }
  disconnect() { }
}
