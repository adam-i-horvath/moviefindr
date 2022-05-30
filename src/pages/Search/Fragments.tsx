import { gql } from '@apollo/client';

export const GET_MOVIE = gql`
  query SearchMovies($queryValue: String!) {
    searchMovies(query: $queryValue) {
      id
      name
      img: poster {
        url: custom(size: "w185_and_h278_bestv2")
      }
      backdrop {
        original
      }

      score
      releaseDate
      genres {
        id
        name
      }
    }
  }
`;
