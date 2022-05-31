import { Box } from '@mui/material';
import { useStyles } from './Style';

import noresult from '../../assets/img/no_result.png';

const NoResult = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={noresult} alt="no result" />
    </Box>
  );
};

export default NoResult;
