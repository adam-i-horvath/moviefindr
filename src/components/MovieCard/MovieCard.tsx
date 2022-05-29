import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardProps } from './Types';
import moment from 'moment';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BasicModal from '../Modal/Modal';

export default function MediaCard(props: CardProps) {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const handleClick = () => {
    setShowModal(true);
    navigate(
      window.location.pathname === '/search'
        ? '/search?' + props.name
        : '/related?' + props.name
    );
    localStorage.setItem('last_viewed', props.name);
  };

  const navigate = useNavigate();
  return (
    <Box padding={1}>
      <Tooltip title="Open">
        <Badge badgeContent={props.score / 2} color="primary">
          <Card sx={{ width: 200, minHeight: 500 }} onClick={handleClick}>
            <CardActionArea>
              <Typography
                padding={1}
                gutterBottom
                variant="overline"
                component="div"
                sx={{
                  position: 'absolute',
                  width: '100%',
                  backgroundColor: '#ffffff',
                }}
              >
                {props.name}
              </Typography>
              <CardMedia component="img" image={props.img} alt="poster" />
              <Box
                sx={{
                  width: '100%',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography padding={1} variant="subtitle2">
                  Rate: {props.score / 2}
                </Typography>
                <Rating
                  name="read-only"
                  value={props.score / 2}
                  precision={0.25}
                  readOnly
                />
              </Box>
              <Typography padding={1} variant="subtitle2">
                Release date: {moment(props.date).utc().format('YYYY-MM-DD')}
              </Typography>
              <Typography padding={1} variant="inherit">
                Genre(s): {props.genrelist.join(', ')}
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardActionArea>
            <Button size="large" onClick={handleClick}>
              Details
            </Button>
          </Card>
        </Badge>
      </Tooltip>
      {showModal ? (
        <BasicModal
          setShowModal={setShowModal}
          title={props.name}
          date={props.date}
          image={props.img}
          backdrop={props.original}
          id={props.id}
        />
      ) : null}
    </Box>
  );
}
