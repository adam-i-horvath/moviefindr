import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardProps } from './Schema';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BasicModal from '../Modal/Modal';
import moment from 'moment';
import { LocalStorage } from '../LocalStorage/LocalStorage';
import { StyledBadge } from './Style';

export default function MediaCard(props: CardProps) {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const handleClick = () => {
    LocalStorage(props);
    setShowModal(true);
    navigate(
      window.location.pathname === '/search'
        ? '/search?' + props.name
        : '/related?' + props.name
    );
  };

  const navigate = useNavigate();

  return (
    <Box padding={1}>
      <StyledBadge
        badgeContent={moment(props.date).utc().format('YYYY.MM.DD')}
        color="primary"
      >
        <Card sx={{ width: 300, minHeight: 520 }} onClick={handleClick}>
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
            <CardMedia
              sx={{ height: 420 }}
              component="img"
              image={props.img}
              alt="poster"
            />
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
            <Typography padding={1} variant="inherit">
              Genre(s): {props.genrelist.join(', ')}
            </Typography>
          </CardActionArea>
        </Card>
      </StyledBadge>
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
