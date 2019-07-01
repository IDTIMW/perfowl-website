import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimestampComponent } from './work/timestamp/timestamp.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'timestamp', component: TimestampComponent },
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
