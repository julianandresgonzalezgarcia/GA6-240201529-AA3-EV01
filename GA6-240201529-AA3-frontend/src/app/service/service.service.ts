import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  productos: Producto[] = [];

  url = 'http://localhost:10000/api/productos/';

  constructor(private http: HttpClient) { }

  CrearProducto(producto:Producto){
    return this.http.post<Producto>(this.url, producto).
    pipe(catchError(error =>{
      return throwError(error);
    }));
  }

  ListarProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url).
    pipe(catchError(error =>{
      return throwError(error);
    }));
  }

  BuscarProductoPorId(_id:any): Observable<Producto>{
    return this.http.get<Producto>(this.url+_id).
    pipe(catchError(error =>{
      return throwError("Producto no encontrado");
    }));
  }

  ActualizarProducto(_id:any, producto:Producto){
    return this.http.put<Producto>(this.url+_id, producto).
    pipe(catchError(error =>{
      return throwError(error);
    }));
  }

  BorrarProducto(_id:any){
    return this.http.delete<Producto>(this.url+_id).
    pipe(catchError(error =>{
      return throwError(error);
    }));
  }
}
