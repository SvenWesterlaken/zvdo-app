import {Component, OnDestroy, OnInit} from '@angular/core';
import {Pool} from '../../../models/pool';
import {Subscription} from 'rxjs/Subscription';
import {PoolService} from '../../../services/pool.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-pool-detail',
  templateUrl: './pool-detail.component.pug'
})
export class PoolDetailComponent implements OnInit, OnDestroy {
  private pool: Pool;
  private sub: Subscription;

  constructor(private poolService: PoolService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.poolService.get(id).then((pool: Pool) => {
        this.pool = pool;
      });
    });
  }

  removePool(id: string) {
    this.poolService.remove(id).subscribe((res) => {
      this.router.navigate(['..'], { relativeTo: this.route });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }



}
