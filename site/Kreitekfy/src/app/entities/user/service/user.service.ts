import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public insert(user: User): Observable<User> {
    let urlEndpoint: string = "http://localhost:8081/kreitekfy/users/";
    return this.http.post<User>(urlEndpoint, user);
  }

  public getUserById(userId: number): Observable<User> {
    let urlEndpoint: string = "http://localhost:8081/kreitekfy/songs/" + userId;
    return this.http.get<User>(urlEndpoint);
  }
}
