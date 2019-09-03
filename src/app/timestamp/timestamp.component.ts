import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from 'src/app/seo.service';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.sass']
})
export class TimestampComponent implements OnInit {

  constructor(
    private router: Router,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.updateTimestampMetaTags();
    window.scroll(0, 0);
    console.log('url: ' + this.router.url);
    if (this.router.url == "/timestamp/privacy-policy") {
      document.getElementById("openModalButton").click();
    }
  }

  updateTimestampMetaTags() {
    this.seoService.updateTimestampMetaTags();
  }

  returnHomepage() {
    this.router.navigate(['/']);
  }
}
