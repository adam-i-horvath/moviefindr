import { Box } from '@mui/material';
import { useStyles } from './Style';

export default function Error() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img
        src="https://cdn.drlinkcheck.com/blog/400-bad-request.png"
        alt="error"
        className={classes.card}
      />
    </Box>
  );
}
