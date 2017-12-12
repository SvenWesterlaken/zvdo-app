import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Pool} from '../../../models/pool';
import {PoolService} from '../../../services/pool.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-pool-list',
  templateUrl: './pool-list.component.pug',
  styleUrls: ['./pool-list.component.sass']
})
export class PoolListComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private pools: Pool[];

  constructor(private poolService: PoolService) { }

  ngOnInit() {
  this.sub = this.poolService.getArray().subscribe((pools: Pool[]) => {
      this.pools = pools;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  hasPools(): boolean {
    return !_.isEmpty(this.pools);
  }

}
