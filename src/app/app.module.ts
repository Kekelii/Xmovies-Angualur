import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FilterComponent } from './navigation/filter/filter.component';
import { SearchComponent } from './navigation/search/search.component';
import { MovieComponent } from './movie/movie.component';
import { StageComponent } from './stage/stage.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { HomeComponent } from './home/home.component';
import { FindmovieComponent } from './findmovie/findmovie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SortedByDateComponent } from './sorted-by-date/sorted-by-date.component';
import { SortbytitleComponent } from './sortbytitle/sortbytitle.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FilterComponent,
    SearchComponent,
    MovieComponent,
    StageComponent,
    EditMovieComponent,
    AddmovieComponent,
    HomeComponent,
    FindmovieComponent,
    SortedByDateComponent,
    SortbytitleComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
