import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonFormatterComponent } from '../../components/main/json-formatter/json-formatter.component';
import { Route, RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path: 'json-formatter',
    component: JsonFormatterComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    JsonFormatterComponent
  ],
  exports: [
    RouterModule
  ],
})
export class ApiDetailsModule { }
