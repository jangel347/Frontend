import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from '../model/material';

const url = 'http://localhost:8080/api/v1/material'

@Injectable({
  providedIn: 'root'
})

export class MaterialService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<Material[]>{
    return this.http.get<Material[]>(url);
  }

  get(id: String):Observable<Material>{
    return this.http.get<Material>(`${url}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(url, data);
  }

  update(id: String, data: any): Observable<any>{
    return this.http.put(`${url}/${id}`, data);
  }

  delete(id: String): Observable<any>{
    return this.http.delete(`${url}/${id}`);
  }

  deleteAll(): Observable<any>{
    return this.http.delete(url);
  }
}
