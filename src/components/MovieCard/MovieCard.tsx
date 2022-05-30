import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardProps } from './Types';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';
import Badge, { BadgeProps } from '@mui/material/Badge';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BasicModal from '../Modal/Modal';
import moment from 'moment';
import styled from '@emotion/styled';

export default function MediaCard(props: CardProps) {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const handleClick = () => {
    setShowModal(true);
    navigate(
      window.location.pathname === '/search'
        ? '/search?' + props.name
        : '/related?' + props.name
    );
    localStorage.setItem('apex_demo_last_viewed_name', props.name);
  };

  const navigate = useNavigate();

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      top: 4,
      right: 30,
      padding: '10px',
    },
  }));

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
