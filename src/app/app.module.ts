import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


import { AppComponent } from './app.component';
import {SortService } from './sort.service';
import {FilterPipe} from './filter.pipe';
import {SearchPipe} from './search.pipe';
import { AppRoutingModule } from './/app-routing.module';
import { DetailedBioComponent } from './detailed-bio/detailed-bio.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SearchPipe,
    DetailedBioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgMultiSelectDropDownModule.forRoot()
    
  ],
  providers: [SortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
