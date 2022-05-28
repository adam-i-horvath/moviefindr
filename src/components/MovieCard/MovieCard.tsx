import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import BasicModal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import moment from 'moment';
import { CardProps } from './Types';

export default function MovieCard(props: CardProps) {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const handleClick = () => {
    setShowModal(true);
    navigate('/search?' + props.name);
  };
  const navigate = useNavigate();
  return (
    <div>
      <CardActionArea>
        <CardMedia component="img" height="240" image={props.img} alt="image" />
        <Typography gutterBottom variant="overline" component="div">
          {props.score / 2}
          <Rating
            name="read-only"
            value={props.score / 2}
            precision={0.25}
            readOnly
          />
        </Typography>
        <Typography variant="overline" component="span" onClick={handleClick}>
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {moment(props.date).utc().format('YYYY-MM-DD')}
        </Typography>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={handleClick}
        >
          Show details
        </Button>
      </CardActions>
      {showModal ? (
        <BasicModal
          setShowModal={setShowModal}
          title={props.name}
          date={props.date}
          image={props.img}
          backdrop={props.original}
        />
      ) : null}
    </div>
  );
}
