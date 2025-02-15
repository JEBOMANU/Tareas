import { Component } from '@angular/core';
import { NoticiaService } from 'src/app/services/noticia.service';

import { Article, NoticiaResponse } from '../../interfaces/noticia';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  noticias: Article[]=[];

  constructor(private serviceNoticias:NoticiaService) {}

  ngOnInit(){
    this.serviceNoticias
    .gettopheadlines()
    .subscribe((resp: NoticiaResponse)=>{
      console.log(resp.articles);
      this.noticias = resp.articles
    });

  }
}
