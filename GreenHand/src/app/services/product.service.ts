import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

const url = 'http://localhost:8080/api/v1/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(url);
  }

  get(id: string): Observable<Product>{
    return this.http.get<Product>(`${url}/${id}`);
  }

  create(data: any): Observable<any>{
    return this.http.post(url, data);
  }

  update(id: string, data: any): Observable<any> {
    return this.http.put(`${url}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(url);
  }
}
