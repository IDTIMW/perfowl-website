import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { VlogToolsComponent } from './vlog-tools/vlog-tools.component';
import { SiteService } from './site.service';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CardComponent } from './vlog-tools/utils/card/card.component';
import { TimestampComponent } from './timestamp/timestamp.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TimestampComponent,
    HomepageComponent,
    VlogToolsComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ScrollToModule.forRoot()
  ],
  providers: [SiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
