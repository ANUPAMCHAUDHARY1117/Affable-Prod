import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedBioComponent } from './detailed-bio/detailed-bio.component';
import { HomeComponent } from './home/home.component';

const routes : Routes = [
  { path : '', component : HomeComponent},
  { path : 'bio/:username', component : DetailedBioComponent}]


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {


}