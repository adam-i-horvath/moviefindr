import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import { WikiTypes, Props } from './Schema';
import Loading from '../Loading/Loading';
import { style } from './Style';

const BasicModal: React.FC<Props> = (props) => {
  const [open] = React.useState(true);
  const handleClose = () => props.setShowModal(false);
  const [loading, setLoading] = useState(true);

  const [wiki, setWiki] = useState<WikiTypes[]>([]);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);

      try {
        let { data } = await axios.get(
          process.env.REACT_APP_WIKIPEDIA_URL + props.title
        );

        setWiki([data]);
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };
    fetch();
  }, [props.title]);

  return (
    <Container>
      {loading && <Loading />}
      {!loading && (
        <Modal
          open={open}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          onBackdropClick={handleClose}
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {props.title}
            </Typography>
            <Typography
              component={'span'}
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              {wiki.map((el) => (
                <Box component={'span'} key={el.pageid}>
                  <Paper elevation={0}>
                    <CardMedia
                      style={{ maxHeight: 200 }}
                      component="img"
                      image={props.backdrop}
                      alt="poster"
                    />
                    <Typography component={'span'} variant={'body2'}>
                      {el.title.normalized}
                    </Typography>
                    <Paper
                      elevation={0}
                      style={{ maxHeight: 200, overflow: 'auto' }}
                    >
                      {el.extract}
                    </Paper>
                  </Paper>
                  <Container
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      margin: '30px',
                    }}
                  >
                    <Button
                      href={el.content_urls.desktop.page}
                      target="_blank"
                      variant="outlined"
                    >
                      Wikipedia
                    </Button>
                    <Button
                      href={'/related?' + props.title + '?' + props.id}
                      variant="contained"
                    >
                      Related <ArrowCircleRightIcon />
                    </Button>
                  </Container>
                  <Typography component={'span'} variant={'body2'}>
                    {el.description}
                  </Typography>
                </Box>
              ))}
            </Typography>
          </Box>
        </Modal>
      )}
    </Container>
  );
};

export default BasicModal;
