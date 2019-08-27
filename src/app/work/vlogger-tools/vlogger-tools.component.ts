import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/site.service';

@Component({
  selector: 'app-vlogger-tools',
  templateUrl: './vlogger-tools.component.html',
  styleUrls: ['./vlogger-tools.component.sass']
})
export class VloggerToolsComponent implements OnInit {


  public platformSites = [];
  public musicSites = [];
  public softwareSites = [];
  public equipmentSites = [];
  public tutorialSites = [];
  public videoSites = [];


  constructor(private _Sites: SiteService) { }

  ngOnInit() {
    this.platformSites = this._Sites.getPlatformSites();
    this.musicSites = this._Sites.getMusicSites();
    this.softwareSites = this._Sites.getSoftwareSites();
    this.tutorialSites = this._Sites.getTutorialSites();
    this.videoSites = this._Sites.getVideoSites();
  }



  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

}
