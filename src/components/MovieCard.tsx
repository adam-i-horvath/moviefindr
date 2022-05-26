import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import BasicModal from '../components/Modal';
import { useNavigate } from 'react-router-dom';

type CardProps = {
  name: string;
  date: string;
  img: string;
  title: string;
};

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
        <CardContent>
          <Typography gutterBottom variant="overline" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          Show details
        </Button>
      </CardActions>
      {showModal ? (
        <BasicModal setShowModal={setShowModal} title={props.name} />
      ) : null}
    </div>
  );
}
