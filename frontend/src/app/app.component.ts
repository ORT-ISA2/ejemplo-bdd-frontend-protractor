import { Component } from '@angular/core';

import { AccountService } from './_services';
import { Estudiante } from './_models';
import { HttpClient } from '@angular/common/http';
@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  Estudiante: Estudiante;

  constructor(
    private accountService: AccountService,
    private http: HttpClient
  ) {
    this.accountService.Estudiante.subscribe((x) => (this.Estudiante = x));
  }

  ngOnInit() {
    this.getCandy();
  }
  getCandy() {
    this.http.get('http://localhost:5000/api/estudiante').subscribe((data) => {
      console.log(data);
    });
  }
}
