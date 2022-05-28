export type Genre = {
  id: number;
  name: string;
};

export type Movies = {
  searchMovies: {
    id: number;
    name: string;
    img: { url: string };
    backdrop: {
      original: string;
    };
    score: number;
    releaseDate: string;
    genres: [Genre];
  }[];
};

export type Props = {
  movieTitle: string;
};
