import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IMarca } from '../models/imarca.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MarcaService {
  create(marca: IMarca) {
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

  createMarca(marca: IMarca): Observable<IMarca> {
    return this.http.post<IMarca>(`${environment.apiurl}/marca`, marca);
  }

  readMarca(): Observable<IMarca[]> {
    return this.http.get<IMarca[]>(`${environment.apiurl}/marca`);
  }

  readById(id: string): Observable<IMarca> {
    return this.http.get<IMarca>(`${environment.apiurl}/marca/${id}`);
  }

  update(marca: IMarca, id: string): Observable<IMarca> {
    return this.http.put<IMarca>(
      `${environment.apiurl}/marca/${id}`,
      marca
    );
  }

  delete(id: string): Observable<IMarca> {
    return this.http.delete<IMarca>(`${environment.apiurl}/marca/${id}`);
  }
}
