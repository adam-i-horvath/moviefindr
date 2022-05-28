import React from 'react';
import { useQuery, gql } from '@apollo/client';
import MovieCard from '../../components/MovieCard/MovieCard';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Movies, Props } from './Types';
import Loading from '../../components/Loading/Loading';
import NoResult from '../../components/NoResult/NoResult';

const GET_MOVIE = gql`
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

const queryValue = window.location.href
  .split('?')
  .pop()
  ?.replaceAll('%20', ' ');

const SearchPage = (props: Props) => {
  const { error, data, loading } = useQuery<Movies>(GET_MOVIE, {
    variables: { queryValue },
  });

  if (loading) return <Loading />;
  if (error) return <div>error</div>;
  if (data?.searchMovies.length === 0) return <NoResult />;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={1}
        columns={16}
        alignItems="center"
        justifyContent="center"
      >
        {data?.searchMovies.map((movie) => {
          const imgLogic =
            movie.img === null
              ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/660px-No-Image-Placeholder.svg.png?20200912122019'
              : movie.img.url;
          const imgOriginLogic =
            movie.backdrop === null ? imgLogic : movie.backdrop.original;
          return (
            <div key={movie.id}>
              <Card sx={{ width: 250, margin: 2, height: 500 }}>
                <MovieCard
                  name={movie.name}
                  date={movie.releaseDate}
                  img={imgLogic}
                  title={movie.name}
                  score={movie.score}
                  original={imgOriginLogic}
                />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  align="center"
                >
                  {movie.genres.map((genre) => {
                    return (
                      <div key={genre.id}>
                        <Typography>{genre.name}</Typography>
                      </div>
                    );
                  })}
                </Typography>
              </Card>
            </div>
          );
        })}
      </Grid>
    </Box>
  );
};
export { queryValue };
export default SearchPage;
