import React from 'react';
import { useQuery } from '@apollo/client';
import MovieCard from '../../components/MovieCard/MovieCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Movies, Props } from './Schema';
import Loading from '../../components/Loading/Loading';
import NoResult from '../../components/NoResult/NoResult';
import Typography from '@mui/material/Typography';
import { GET_MOVIE } from './Fragments';
import { queryValue } from '../../global/Resolver';

const SearchPage = (props: Props) => {
  const { error, data, loading } = useQuery<Movies>(GET_MOVIE, {
    variables: { queryValue },
  });

  if (loading) return <Loading />;
  if (error) return <div>error</div>;
  if (data?.searchMovies.length === 0) return <NoResult />;

  return (
    <Box margin={2}>
      <Typography variant="h4">Search results: </Typography>
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
              <MovieCard
                name={movie.name}
                date={movie.releaseDate}
                img={imgLogic}
                title={movie.name}
                score={movie.score}
                original={imgOriginLogic}
                id={movie.id}
                genrelist={movie.genres.map((genre) => genre.name)}
              />
            </div>
          );
        })}
      </Grid>
    </Box>
  );
};
export { queryValue };
export default SearchPage;
