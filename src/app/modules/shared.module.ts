import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MomentModule} from "angular2-moment";
import {MaterializeModule} from "angular2-materialize";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    MaterializeModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    MomentModule
  ]
})

export class SharedModule {}
