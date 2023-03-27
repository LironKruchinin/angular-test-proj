//http://www.omdbapi.com/?apikey=3e591c29&t=

import { Injectable } from '@angular/core'
import { currWatcher } from '../../app/cmp/watchers/types'



@Injectable({
   providedIn: 'root'
})

export class MovieService {

   constructor() { }


   async getMoviePosters(watcher: currWatcher) {
      try {

         const moviePictures = Promise.all((watcher.movies || []).map(async movie => {
            const response = await fetch(`http://www.omdbapi.com/?apikey=3e591c29&t=${movie.title}`)
            const picture = await response.json()

            return { title: picture.Title, poster: picture.Poster }
         }))
         return moviePictures

      } catch (err) {
         console.log(`Error, had error fetching data`, err)
         return err
      }
   }

}
