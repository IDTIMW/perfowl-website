import { Component, OnInit } from '@angular/core';
import { SeoService } from './seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit() {
    this.updatePerfowlMetaTags();
  }

  updatePerfowlMetaTags() {
    this.seoService.updatePerfowlMetaTags();
  }

  title = 'Perfowl Studio';
}
