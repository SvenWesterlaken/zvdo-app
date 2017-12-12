import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PoolService} from '../../../services/pool.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pool-create',
  templateUrl: './pool-create.component.pug',
  styleUrls: ['./pool-create.component.sass']
})
export class PoolCreateComponent implements OnInit {
  private newPoolForm: FormGroup;

  constructor(private poolService: PoolService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.newPoolForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'address': new FormGroup({
        'street': new FormControl(null,  Validators.required),
        'number': new FormControl(null, Validators.required),
        'suffix': new FormControl(null),
        'city': new FormControl(null, Validators.required),
        'postal_code': new FormControl(null, [Validators.required, Validators.maxLength(6), Validators.minLength(6)]),
        'country': new FormControl('Nederland', Validators.required)
      }),
    });
  }

  newPool() {
    this.poolService.create(this.newPoolForm.value).subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    }, (err) => console.log(err));
  }



}
