import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { WikiTypes } from './Types';

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  date: string;
  image: string;
  backdrop: string;
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '600px',
  bgcolor: 'background.paper',
  boxShadow: 12,
  p: 5,
};

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
              ' (2022 film)'
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
              <Typography component={'span'} variant={'body2'} key={el.pageid}>
                <img src={props.backdrop} alt="img" width="400px" />
                <Typography component={'span'} variant={'body2'}>
                  {el.title.normalized}
                </Typography>
                <Typography component={'span'} variant={'body2'}>
                  {el.extract}
                </Typography>
                <Typography component={'span'} variant={'body2'}>
                  {el.description}
                </Typography>
                <Typography component={'span'} variant={'body2'}>
                  <a href={el.content_urls.desktop.page}>Wikipedia</a>
                </Typography>
              </Typography>
            ))}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
