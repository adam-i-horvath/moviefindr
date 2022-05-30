import Box from '@mui/material/Box';
import { useStyles } from './Style';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Typography } from '@mui/material';

const Home = () => {
  const classes = useStyles();
  const last_viewed =
    localStorage.getItem('apex_demo_last_viewed_name') === null
      ? null
      : 'Last checked movie: ' +
        localStorage.getItem('apex_demo_last_viewed_name');

  return (
    <Box className={classes.root}>
      <TravelExploreIcon />
      <Typography display="s" variant="h5">
        Welcome in the movie searching page!
      </Typography>
      <Typography variant="h4">{last_viewed}</Typography>
    </Box>
  );
};

export default Home;
