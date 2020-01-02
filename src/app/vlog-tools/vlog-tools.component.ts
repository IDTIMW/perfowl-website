import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/site.service';
import { SeoService } from 'src/app/seo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vlog-tools',
  templateUrl: './vlog-tools.component.html',
  styleUrls: ['./vlog-tools.component.sass']
})
export class VlogToolsComponent implements OnInit {


  platformSites = [];
  musicSites = [];
  softwareSites = [];
  equipmentSites = [];
  tutorialSites = [];
  videoSites = [];

  title = 'Vlog 工具人';


  constructor(
    private router: Router,
    private _Sites: SiteService,
    private seoService: SeoService,
  ) { }

  ngOnInit() {
    this.updateVlogToolsMetaTags();
    window.scroll(0, 0);
    this.platformSites = this._Sites.getPlatformSites();
    this.musicSites = this._Sites.getMusicSites();
    this.softwareSites = this._Sites.getSoftwareSites();
    this.tutorialSites = this._Sites.getTutorialSites();
    this.videoSites = this._Sites.getVideoSites();
  }

  updateVlogToolsMetaTags() {
    this.seoService.updateVlogToolsMetaTags();
  }

  returnHomepage() {
    this.router.navigate(['/']);
  }



  scrollToElement($element: { scrollIntoView: (arg0: { behavior: string; block: string; inline: string; }) => void; }): void {
    $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

}
