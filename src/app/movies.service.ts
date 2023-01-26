import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})


//populating local storage
// type Movie={
//   id:number,
//   name:string,
//   gerner:string,
//   date:string
// }
// // function requestForMovies():Movie[]{
//   console.log('working '+ await fetch('../assets/movies.json'))
// }

export class MoviesService {

collection:{id:number,name:string,genre:string,date:string}[]=[{
  "id": 1,
  "name": "The Shawshank Redemption",
  "genre": "Drama",
  "date": "20 Sep 1994"
},
{
  "id": 2,
  "name": "The Godfather",
  "genre": "Crime",
  "date": "24 Mar 1972"
},
{
  "id": 3,
  "name": "The Dark Knight",
  "genre": "Action",
  "date": "18 Jul 2008"
},
{
  "id": 4,
  "name": "Pulp Fiction",
  "genre": "Crime",
  "date": "14 Oct 1994"
},
{
  "id": 5,
  "name": "The Lord of the Rings: The Return of the King",
  "genre": "Fantasy",
  "date": "17 Dec 2003"
},
{
  "id": 6,
  "name": "The Good, the Bad and the Ugly",
  "genre": "Western",
  "date": "29 Dec 1966"
},
{
  "id": 7,
  "name": "Forrest Gump",
  "genre": "Comedy-drama",
  "date": "06 Jul 1994"
},
{
  "id": 8,
  "name": "Inception",
  "genre": "Science fiction",
  "date": "16 Jul 2010"
},
{
  "id": 9,
  "name": "The Matrix",
  "genre": "Science fiction",
  "date": "31 Mar 1999"
},
{
  "id": 10,
  "name": "Goodfellas",
  "genre": "Crime",
  "date": "21 Sep 1990"
}
]

  constructor() { 


  }


  /**
   * It returns an array of movies from local storage or the collection array if local storage is empty
   * @param {string} [sort] - string
   * @param {string} [search] - string
   * @returns an array of objects.
   */
  getMovies(sort?:string,search?:string):{id:number,name:string,date:string,genre:string}[]|null{
   let movies:{id:number,name:string,date:string,genre:string}[]=[];

   let total = localStorage.getItem('total')
 
   let totalAsNum
   if(total){
          totalAsNum=parseInt(total)
          if(totalAsNum)
          for (let i = 1;i<=totalAsNum;i++){
            let movie = localStorage.getItem(i.toString())
            if(movie)
            movies.push(JSON.parse(movie as string))  
          }

          if(sort=='Title'){
            movies.sort((a,b)=>{
              if(a.name < b.name){
                return -1
              }
              if(a.name>b.name){
                return 1
              }
              return 0
              
            });
            return movies
            
          }

          if(sort=='Date'){
            movies.sort((a,b)=>{
              if(a.date < b.date){
                return -1
              }
              if(a.date>b.date){
                return 1
              }
              return 0
              
            });
            return movies
          }

     
      
            return movies
    }else{
      let total
      for(let i=0;i<this.collection.length;i++){ 
        let value= i+1
        localStorage.setItem(value.toString(),JSON.stringify(this.collection[i]))
        movies.push(this.collection[i])
        total=value
       }
       if(total)
       localStorage.setItem('total',total.toString())
      return movies
    }
  }


searchMovie(search:string){
let list:{}[]=[];
  let movies= this.getMovies()
  if(search){
   
    if(movies)
     movies.forEach((a: { name?: any; })=>{
      if(a.name == search){
        list.push(a)
      }
     })
     
  }
  console.log(list)
  return list
}


  addMovies(obj: { name:string,genre:string,date:string,id?:Number }){
      
          let previous = localStorage.getItem('total');
          let  previousAsNum
          if(previous){
            
                  previousAsNum=parseInt(previous);
                  if(previousAsNum)
                  previousAsNum =previousAsNum+1
                  obj.id= previousAsNum
                  if(previousAsNum)
                  console.log(obj)
                  localStorage.setItem('total',previousAsNum.toString()) 
                  localStorage.setItem(previousAsNum.toString(),JSON.stringify(obj))
          return
            }
            obj.id=1
            localStorage.setItem('total','1')
          localStorage.setItem('1',JSON.stringify(obj))
  }
  
  removeMovies(id:number){
        localStorage.removeItem(id.toString())
  }
}
