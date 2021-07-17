import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Form } from '../app/form';
import { from, Observable, of } from 'rxjs'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
private formsUrl:string;
  constructor(private http: HttpClient) {
    this.formsUrl ='http://localhost:8080/forms' ;
   }

   public findAll(): Observable<Form[]>{
     return this.http.get<Form[]>(this.formsUrl).pipe(catchError(this.errorHandler));
   }

   errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error.");
}

   public save (form: Form){
    return this.http.post<Form[]>(this.formsUrl,form);
   }
}
