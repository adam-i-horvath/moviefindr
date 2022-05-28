import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function DescriptionAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        Please fill the — <strong>input field!</strong>
      </Alert>
    </Stack>
  );
}
