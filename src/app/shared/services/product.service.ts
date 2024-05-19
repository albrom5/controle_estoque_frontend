import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError,} from 'rxjs';
import { IProduct } from '../models/iproduct.model';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  create(product: IProduct) {
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
  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(`Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(() => new Error('Something bad happened; please try again later.'));
  // }

  createProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${environment.apiurl}/produto/novo`, product)
    // .pipe(
    //   catchError(this.handleError)
    // );
  }

  readProduct(): Observable<any> {
    return this.http.get<any>(`${environment.apiurl}/produtos`);
  }

  readById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.apiurl}/produto/${id}`);
  }

  update(product: IProduct, id: string): Observable<IProduct> {
    return this.http.patch<IProduct>(
      `${environment.apiurl}/produto/${id}`,
      product
    );
  }

  delete(id: string): Observable<IProduct> {
    return this.http.delete<IProduct>(`${environment.apiurl}/produto/${id}`);
  }
}
