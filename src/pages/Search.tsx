import React from 'react';
import { useQuery, gql } from '@apollo/client';
import MovieCard from '../components/MovieCard';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

type Genre = {
  id: number;
  name: string;
};

type Movies = {
  searchMovies: {
    id: number;
    name: string;
    img: { url: string };
    releaseDate: string;
    genres: [Genre];
  }[];
};

const GET_MOVIE = gql`
  query SearchMovies($queryValue: String!) {
    searchMovies(query: $queryValue) {
      id
      name
      img: poster {
        url: custom(size: "w185_and_h278_bestv2")
      }
      releaseDate
      genres {
        id
        name
      }
    }
  }
`;

interface Props {
  movieTitle: String;
}

const queryValue = window.location.href
  .split('?')
  .pop()
  ?.replaceAll('%20', ' ');

const SearchPage = (props: Props) => {
  const { error, data, loading } = useQuery<Movies>(GET_MOVIE, {
    variables: { queryValue },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>error</div>;
  if (data?.searchMovies.length === 0) return <div>no result</div>;

  console.log({ data });
  return (
    <div>
      Result:
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
            return (
              <div key={movie.id}>
                <Card sx={{ maxWidth: 150 }}>
                  <MovieCard
                    name={movie.name}
                    date={movie.releaseDate}
                    img={imgLogic}
                    title={movie.name}
                  />
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    align="center"
                  >
                    {movie.genres.slice(0, 1).map((genre) => {
                      return (
                        <div key={genre.id}>
                          <p>{genre.name}</p>
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
    </div>
  );
};

export default SearchPage;
