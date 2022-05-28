import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #9013FE 15%, #50E3C2 90%)',
    minWidth: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  card: {
    maxWidth: '40%',
    minHeight: '20vh',
    display: 'flex',
    alignItems: 'center',
  },
});

export default function Error() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <img
          src="https://cdn.drlinkcheck.com/blog/400-bad-request.png"
          alt="error"
          className={classes.card}
        />
      </div>
    </>
  );
}
