import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exp } from '../components/model/Exp';

@Injectable({
  providedIn: 'root'
})
export class ExpServiceService {
  
  expURL = 'http://localhost:8080/api/v1/exp/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Exp[]>{
    return this.httpClient.get<Exp[]>(this.expURL + 'lista');
  }

  public details(id: number): Observable<Exp>{
    return this.httpClient.get<Exp>(this.expURL + `detail/${id}`)
  }

  public save(exp: Exp): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', exp);
  }

  public update(id: number, exp: Exp): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, exp);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
