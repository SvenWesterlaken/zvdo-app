import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-pool-container',
  templateUrl: './pool-container.component.pug',
  styleUrls: ['./pool-container.component.sass']
})
export class PoolContainerComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
