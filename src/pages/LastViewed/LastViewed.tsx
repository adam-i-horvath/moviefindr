import { Container, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Searched_Items } from './Schema';
import { StyledTableCell } from './Style';
import { searched_item } from './Resolver';

const LastViewed = () => {
  return (
    <Container>
      {localStorage.getItem('apex_demo_last_viewed_name') == null ? (
        <Typography variant="h2" mt={2}>
          Lets search for some movie, to see your searching history... 🔦👀
        </Typography>
      ) : (
        <TableContainer
          sx={{ marginTop: '20px', marginBottom: '20px' }}
          component={Paper}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Movie title</StyledTableCell>
                <StyledTableCell align="right">TMDB ID</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searched_item.map((movie: Searched_Items) => (
                <TableRow
                  key={movie.date}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <StyledTableCell component="th">
                    {movie.title}
                  </StyledTableCell>
                  <StyledTableCell align="right">{movie.id}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default LastViewed;
