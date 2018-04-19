import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  apiUrl = 'http://ailabdev.ey.net/leasereviewer/api/lease/';

  constructor(private http: HttpClient) { }

  getLeases() {
    return this.http.get<any[]>(this.apiUrl);
  }

}
