import { gql } from '@apollo/client';

export const GET_RELATED = gql`
  query getMovie($idFilter: ID!) {
    movie(id: $idFilter) {
      id
      name
      recommended {
        id
        name
        releaseDate
        backdrop {
          original
        }
        score
        img: poster {
          url: custom(size: "w185_and_h278_bestv2")
        }
        genres {
          id
          name
        }
        poster {
          large
        }
      }
    }
  }
`;
