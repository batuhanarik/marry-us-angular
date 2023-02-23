import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getCategories() {
    this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}
