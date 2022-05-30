import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import TableCell from '@mui/material/TableCell';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 26,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));
