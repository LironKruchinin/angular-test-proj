export interface watcher {
   name: string,
   email: string,
   movies?: { title: string, year?: number, rating?: number }[]
}

export interface currWatcher {
   name?: string,
   email?: string,
   movies?: { title: string, year?: number, rating?: number }[]
}

export interface movie {
   Title: string,
   Year: number,
   Rated: string,
   Released: number,
   Runtime: number,
   Genre: string,
   Director: string,
   Writer: string,
   Actors: string,
   Plot: string,
   Language: string,
   Country: string,
   Awards: string,
   Poster: string,
   Ratings: rating[],
   Metascore: number,
   imdbRating: number,
   imdbVotes: string,
   imdbID: string,
   Type: string,
   DVD: string,
   BoxOffice: string,
   Production: string,
   Website: string,
   Response: boolean
}

interface rating {
   Source: string,
   Value: string
}
