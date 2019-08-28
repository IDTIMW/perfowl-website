import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimestampComponent } from './work/timestamp/timestamp.component';
import { HomepageComponent } from './homepage/homepage.component';
import { VlogToolsComponent } from './work/vlog-tools/vlog-tools.component';

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
