import { useStyles } from './Style';
import { Box } from '@mui/material';

const NoResult = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img
        src="https://cdn.dribbble.com/users/1883357/screenshots/6016190/media/50b508673f1bd07bc3022c3b62c3a3a7.png?compress=1&resize=400x300"
        alt="no result"
      />
    </Box>
  );
};

export default NoResult;
