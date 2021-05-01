import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  postUser(user: User): Observable<User> {
    return this.http.post('https://filed-fake-backend.com', user).pipe(map(() => user));
  }
}
