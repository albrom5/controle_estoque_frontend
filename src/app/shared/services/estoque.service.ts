import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IEstoque } from '../models/iestoque.model';
import { environment } from 'src/environments/environment';

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

  createEstoque(armazem: IEstoque): Observable<IEstoque> {
    return this.http.post<IEstoque>(`${environment.apiurl}/estoque`, armazem);
  }

  readEstoque(): Observable<IEstoque[]> {
    return this.http.get<IEstoque[]>(`${environment.apiurl}/estoque`);
  }

  readById(id: string): Observable<IEstoque> {
    return this.http.get<IEstoque>(`${environment.apiurl}/estoque/${id}`);
  }

  update(armazem: IEstoque, id: string): Observable<IEstoque> {
    return this.http.put<IEstoque>(
      `${environment.apiurl}/estoque/${id}`,
      armazem
    );
  }

  delete(id: string): Observable<IEstoque> {
    return this.http.delete<IEstoque>(`${environment.apiurl}/estoque/${id}`);
  }
}
