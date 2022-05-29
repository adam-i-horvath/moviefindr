import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { WikiTypes, Props } from './Types';
import Button from '@mui/material/Button';
import { style } from './Style';
import { ImageListItem } from '@mui/material';

const BasicModal: React.FC<Props> = (props) => {
  const [open] = React.useState(true);
  const handleClose = () => props.setShowModal(false);

  const [albums, setAlbums] = useState<WikiTypes[]>([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        let { data } = await axios.get(
          'https://en.wikipedia.org/api/rest_v1/page/summary/' + props.title
        );

        setAlbums([data]);
      } catch (err) {
        console.log(err.response.status);
        if (err.response.status === 404) {
          let { data } = await axios.get(
            'https://en.wikipedia.org/api/rest_v1/page/summary/' +
              props.title +
              '_(film)'
          );
          setAlbums([data]);
        }
      }
    };
    fetch();
  }, [props.title]);

  return (
    <div>
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
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {albums.map((el) => (
              <Box component={'span'} key={el.pageid}>
                <ImageListItem>
                  <img src={props.backdrop} alt="img" width="400px" />
                </ImageListItem>
                <Typography component={'span'} variant={'body2'}>
                  {el.title.normalized}
                </Typography>
                <Typography component={'span'} variant={'body2'}>
                  {el.extract}
                </Typography>
                <Typography component={'span'} variant={'body2'}>
                  {el.description}
                </Typography>
                <Button
                  href={el.content_urls.desktop.page}
                  target="_blank"
                  variant="outlined"
                >
                  Wikipedia
                </Button>
                <Button
                  href={'/related?' + props.title + '?' + props.id}
                  variant="outlined"
                >
                  Related
                </Button>
              </Box>
            ))}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
