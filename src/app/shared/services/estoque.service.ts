import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IEstoque } from '../models/iestoque.model';
import { environment } from 'src/environments/environment';
import { Imovimento } from '../models/imovimento';

@Injectable({
  providedIn: 'root',
})
export class EstoqueService {
  create(armazem: IEstoque) {
    throw new Error('Method not implemented.');
  }
  constructor(private snack: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, css: string): void {
    this.snack.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [css],
    });
  }

  createEstoque(estoque: IEstoque): Observable<IEstoque> {
    return this.http.post<IEstoque>(`${environment.apiurl}/estoque/novo`, estoque);
  }

  readEstoque(): Observable<any> {
    return this.http.get<any>(`${environment.apiurl}/itens_estoque`);
  }

  readEstoquebyArmazem(armazem_id: string): Observable<any> {
    armazem_id = armazem_id;
    const query = armazem_id ? {params: new HttpParams().set('armazem_id', armazem_id)} : {};
    return this.http.get<any>(`${environment.apiurl}/itens_estoque`, query);
  }

  readById(id: string): Observable<IEstoque> {
    return this.http.get<IEstoque>(`${environment.apiurl}/estoque/${id}`);
  }

  update(estoque: IEstoque, id: string): Observable<IEstoque> {
    return this.http.patch<IEstoque>(
      `${environment.apiurl}/estoque/${id}`,
      estoque
    );
  }

  delete(id: string): Observable<IEstoque> {
    return this.http.delete<IEstoque>(`${environment.apiurl}/estoque/${id}`);
  }

  movimentaEstoque(movimento: Imovimento, estoque_id: string): Observable<IEstoque> {
    return this.http.post<IEstoque>(`${environment.apiurl}/${estoque_id}/movimento/novo`, movimento);
  }
}
