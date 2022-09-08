export interface IMovie {
  id: number;
  title: string;
  year: number;
  format: string;
  actors: string[];
};

export interface IMoviesList {
  movies: [] | IMovie[];
}