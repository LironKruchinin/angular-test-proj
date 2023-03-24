//http://www.omdbapi.com/?apikey=3e591c29&t=

import { Injectable } from '@angular/core';
import { fromFetch } from 'rxjs/fetch'

// const data$ = fromFetch()

@Injectable({
   providedIn: 'root'
})

export class MovieService {

   constructor() { }

   getHelloWorld() {
      return 'hello world'
   }

}
