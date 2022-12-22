import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonCmp({style , text , onClick }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" sx={style} onClick={onClick}>{text}  </Button>
    </Stack>
  );
}