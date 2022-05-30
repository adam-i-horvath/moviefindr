export type Movies = {
  movie: {
    id: number;
    name: string;
    recommended: {
      id: number;
      name: string;
      releaseDate: string;
      backdrop: {
        original: string;
      };
      score: number;
      img: { url: string };
      genres: [Genre];
      poster: {
        large: string;
      };
    }[];
  };
};

export type Genre = {
  id: number;
  name: string;
};

export type Props = {
  movieTitle: string;
};
