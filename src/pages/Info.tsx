import React from 'react';
import {
  Typography, Card, CardContent, CardHeader,
} from '@mui/material';

export default function Info() {
  return (
    <Card sx={{ my: 2 }}>
      <CardHeader title="Information" sx={{ pb: 0 }} />
      <CardContent>
        <Typography component="div" variant="body1" sx={{ my: 1 }}>
          Welcome to my website!
        </Typography>
      </CardContent>
    </Card>
  );
}
