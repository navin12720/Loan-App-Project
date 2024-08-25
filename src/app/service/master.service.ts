import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseModel, Application } from '../model/Applicationmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}
  addnewApplication(obj: Application): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(
      'https://projectapi.gerasim.in/api/Loan/AddNewApplication',
      obj
    );
  }
}
