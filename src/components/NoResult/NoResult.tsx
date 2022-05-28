import { useStyles } from './Style';
import { Box } from '@mui/material';

const NoResult = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img
        src="https://cdn.drlinkcheck.com/blog/404-not-found.png"
        alt="no result"
      />
    </Box>
  );
};

export default NoResult;
