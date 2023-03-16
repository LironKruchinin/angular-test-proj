import watchers from './watchers.json'
export interface Watcher {
   name: string;
   email: string;
   movies_watched: { title: string; year: number; rating: number; }[];
}
