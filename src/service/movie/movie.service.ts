//http://www.omdbapi.com/?apikey=3e591c29&t=

import { Injectable } from '@angular/core'
import { fromFetch } from 'rxjs/fetch'
import { watcher } from '../../app/cmp/watchers/types'


// const data$ = fromFetch()

@Injectable({
   providedIn: 'root'
})

export class MovieService {

   constructor() { }


   async getMoviePosters(watcher: watcher) {
      try {
         const moviePictures = Promise.all((watcher.movies || []).map(async movie => {
            const response = await fetch(`http://www.omdbapi.com/?apikey=3e591c29&t=${movie.title}`)
            const picture = await response.json()

            return { poster: picture.Poster }
         }))
         return moviePictures

      } catch (err) {
         console.log(`Error, had error fetching data`, err)
         return err
      }
   }

}
