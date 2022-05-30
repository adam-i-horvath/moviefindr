import { useQuery, gql } from '@apollo/client';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Loading from '../../components/Loading/Loading';
import MovieCard from '../../components/MovieCard/MovieCard';
import NoResult from '../../components/NoResult/NoResult';

const searchedMovie = window.location.href.split('?').pop();

type Movies = {
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

type Genre = {
  id: number;
  name: string;
};

export type Props = {
  movieTitle: string;
};

const GET_MOVIE = gql`
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
const idFilter = searchedMovie;

const Related = (props: Props) => {
  const { error, data, loading } = useQuery<Movies>(GET_MOVIE, {
    variables: { idFilter },
  });

  if (loading) return <Loading />;
  if (error) return <NoResult />;
  if (data?.movie.recommended.length === 0) return <NoResult />;

  return (
    <Box margin={2}>
      <Typography variant="h4">Related movies: </Typography>
      <Grid
        container
        spacing={1}
        columns={16}
        alignItems="center"
        justifyContent="center"
      >
        {data?.movie.recommended.map((item) => {
          const imgLogic =
            item.backdrop === null
              ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/660px-No-Image-Placeholder.svg.png?20200912122019'
              : item.backdrop.original;

          const urlLogic =
            item.img === null
              ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/660px-No-Image-Placeholder.svg.png?20200912122019'
              : item.img.url;

          return (
            <div key={item.id}>
              <MovieCard
                name={item.name}
                date={item.releaseDate}
                img={urlLogic}
                title={item.name}
                score={item.score}
                original={imgLogic}
                id={item.id}
                genrelist={item.genres.map((genre) => genre.name)}
              />
            </div>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Related;
