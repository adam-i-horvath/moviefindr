import { useQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Loading from '../../components/Loading/Loading';
import MovieCard from '../../components/MovieCard/MovieCard';
import NoResult from '../../components/NoResult/NoResult';

import { GET_RELATED } from './Fragments';
import { Movies, Props } from './Schema';

import { searchedMovie } from '../../global/Resolver';

import noimage from '../../assets/img/no_image.png';

const idFilter = searchedMovie;

const Related = (props: Props) => {
  const { error, data, loading } = useQuery<Movies>(GET_RELATED, {
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
            item.backdrop === null ? noimage : item.backdrop.original;

          const urlLogic = item.img === null ? noimage : item.img.url;

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
