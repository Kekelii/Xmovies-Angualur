import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Importing Components */
import { AddmovieComponent } from './addmovie/addmovie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { HomeComponent } from './home/home.component';
import { FindmovieComponent } from './findmovie/findmovie.component';

import { SortedByDateComponent } from './sorted-by-date/sorted-by-date.component';
import { SortbytitleComponent } from './sortbytitle/sortbytitle.component';
import { SearchResultsComponent } from './search-results/search-results.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'addmovie',component:AddmovieComponent},
  {path:'editmovie/:id',component:EditMovieComponent},
  {path:'findmovie',component:FindmovieComponent},
  {path:'bytitle',component:SortedByDateComponent},
  {path:'bydate',component:SortbytitleComponent},
  {path:'search/:item',component:SearchResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
