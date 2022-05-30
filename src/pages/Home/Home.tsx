import Box from '@mui/material/Box';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Typography } from '@mui/material';

import { useStyles } from './Style';

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TravelExploreIcon />
      <Typography variant="h5">Welcome in the movie searching page!</Typography>
    </Box>
  );
};

export default Home;
