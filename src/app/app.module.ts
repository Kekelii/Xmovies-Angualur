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
    AddmovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
