import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IArmazem } from '../models/iarmazem.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArmazemService {
  create(armazem: IArmazem) {
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

  createArmazem(armazem: IArmazem): Observable<IArmazem> {
    return this.http.post<IArmazem>(`${environment.apiurl}/armazem/novo`, armazem);
  }

  readArmazem(): Observable<any> {
    return this.http.get<any>(`${environment.apiurl}/armazens`);
  }

  readById(id: string): Observable<IArmazem> {
    return this.http.get<IArmazem>(`${environment.apiurl}/armazem/${id}`);
  }

  update(armazem: IArmazem, id: string): Observable<IArmazem> {
    return this.http.patch<IArmazem>(
      `${environment.apiurl}/armazem/${id}`,
      armazem
    );
  }

  delete(id: string): Observable<IArmazem> {
    return this.http.delete<IArmazem>(`${environment.apiurl}/armazem/${id}`);
  }
}
