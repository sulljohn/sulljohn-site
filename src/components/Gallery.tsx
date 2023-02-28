import React from 'react';
import {
  Typography, Card, CardContent, CardHeader,
} from '@mui/material';

export default function Gallery() {
  return (
    <Card sx={{ my: 2 }}>
      <CardHeader title="Artwork" sx={{ pb: 0 }} />
      <CardContent>
        <Typography component="div" variant="body1" sx={{ my: 1 }}>
          See gallery of artwork here
        </Typography>
      </CardContent>
    </Card>
  );
}
