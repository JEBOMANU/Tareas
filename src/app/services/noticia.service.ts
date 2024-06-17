import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NoticiaResponse } from '../interfaces/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http:HttpClient) { }

  gettopheadlines(){
    return this.http.get<NoticiaResponse>("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e6c0d53a4faf4e7c90451c035fe90484")
  }
}
