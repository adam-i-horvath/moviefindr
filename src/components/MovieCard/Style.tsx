import styled from '@emotion/styled';
import Badge, { BadgeProps } from '@mui/material/Badge';

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    top: 4,
    right: 30,
    padding: '10px',
  },
}));
