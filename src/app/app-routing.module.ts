import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { VlogToolsComponent } from './vlog-tools/vlog-tools.component';
import { TimestampComponent } from './timestamp/timestamp.component';

const routes: Routes = [
  { path: 'timestamp', component: TimestampComponent },
  { path: 'timestamp/privacy-policy', component: TimestampComponent },
  { path: '', component: HomepageComponent },
  { path: 'vlogtools', component: VlogToolsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
