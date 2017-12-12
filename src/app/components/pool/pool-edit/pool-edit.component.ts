import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PoolService} from '../../../services/pool.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Pool} from '../../../models/pool';

@Component({
  selector: 'app-pool-edit',
  templateUrl: './pool-edit.component.pug'
})
export class PoolEditComponent implements OnInit {
  private editPoolForm: FormGroup;

  constructor(private poolService: PoolService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.editPoolForm = new FormGroup({
      _id: new FormControl(null, Validators.required),
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

    this.poolService.get(this.route.snapshot.params['id']).then((pool: Pool) => {
      this.editPoolForm.patchValue({
        _id: pool._id,
        'name': pool.name,
        'address': pool.address
      });
    });


  }

  updatePool() {
    this.poolService.update(this.editPoolForm.value).subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    }, (err) => console.log(err));
  }

}
