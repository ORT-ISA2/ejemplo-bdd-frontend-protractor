import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Estudiante } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private userSubject: BehaviorSubject<Estudiante>;
  public Estudiante: Observable<Estudiante>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<Estudiante>(
      JSON.parse(localStorage.getItem('Estudiante'))
    );
    this.Estudiante = this.userSubject.asObservable();
  }

  public get userValue(): Estudiante {
    return this.userSubject.value;
  }

  register(Estudiante: Estudiante) {
    return this.http.post(`${environment.apiUrl}/api/estudiante`, Estudiante);
  }

  // getAll() {
  //     return this.http.get<Estudiante[]>(`${environment.apiUrl}/users`);
  // }

  // getById(id: string) {
  //     return this.http.get<Estudiante>(`${environment.apiUrl}/users/${id}`);
  // }

  // update(id, params) {
  //     return this.http.put(`${environment.apiUrl}/users/${id}`, params)
  //         .pipe(map(x => {
  //             // update stored Estudiante if the logged in Estudiante updated their own record
  //             if (id == this.userValue.id) {
  //                 // update local storage
  //                 const Estudiante = { ...this.userValue, ...params };
  //                 localStorage.setItem('Estudiante', JSON.stringify(Estudiante));

  //                 // publish updated Estudiante to subscribers
  //                 this.userSubject.next(Estudiante);
  //             }
  //             return x;
  //         }));
  // }

  // // delete(id: string) {
  // //     return this.http.delete(`${environment.apiUrl}/users/${id}`)
  // //         .pipe(map(x => {
  // //             // auto logout if the logged in Estudiante deleted their own record
  // //             if (id == this.userValue.id) {
  // //                 this.logout();
  // //             }
  // //             return x;
  // //         }));
  // // }
}
