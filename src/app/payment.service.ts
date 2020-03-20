import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import {List} from './model/select.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  documentUrl = 'assets/json/document.json';
  genderUrl = 'assets/json/gender.json';
  installmentUrl = 'assets/json/installment.json';
  institutionUrl = 'assets/json/institution.json';
  marriedUrl = 'assets/json/married-status.json';
  relationUrl = 'assets/json/relation.json';
  stateUrl = 'assets/json/state.json';

  constructor(
    private http: HttpClient
  ) { }

  getDocuments():  Observable<List[]>{
    return this.http.get<List[]>(this.documentUrl);
  }

  getGender():  Observable<List[]>{
    return this.http.get<List[]>(this.genderUrl);
  }

  getInstallment():  Observable<List[]>{
    return this.http.get<List[]>(this.installmentUrl);
  }

  getinstitutions():  Observable<List[]>{
    return this.http.get<List[]>(this.institutionUrl);
  }

  getMarriedStatus():  Observable<List[]>{
    return this.http.get<List[]>(this.marriedUrl);
  }

  getRelations():  Observable<List[]>{
    return this.http.get<List[]>(this.relationUrl);
  }

  getStates():  Observable<List[]>{
    return this.http.get<List[]>(this.stateUrl);
  }

}
