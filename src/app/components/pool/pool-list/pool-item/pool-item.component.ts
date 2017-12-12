import {Component, Input} from '@angular/core';
import {Pool} from '../../../../models/pool';

@Component({
  selector: 'app-pool-item',
  templateUrl: './pool-item.component.pug',
  styleUrls: ['./pool-item.component.sass']
})
export class PoolItemComponent {
  @Input() pool: Pool;
}
