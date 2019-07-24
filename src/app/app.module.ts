import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { BannerComponent } from './banner/banner.component';
import { ServiceComponent } from './service/service.component';
import { WorkComponent } from './work/work.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';
import { TimestampComponent } from './work/timestamp/timestamp.component';
import { HomepageComponent } from './homepage/homepage.component';
import { VloggerToolsComponent } from './work/vlogger-tools/vlogger-tools.component';
import { SiteService } from './site.service';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    ServiceComponent,
    WorkComponent,
    TeamComponent,
    FooterComponent,
    TimestampComponent,
    HomepageComponent,
    VloggerToolsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ScrollToModule.forRoot()
  ],
  providers: [SiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
