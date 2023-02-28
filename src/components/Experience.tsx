import React from 'react';
import {
  Typography, Card, CardContent, CardHeader,
} from '@mui/material';

export default function Projects() {
  return (
    <Card sx={{ my: 2 }}>
      <CardHeader title="Experience" sx={{ pb: 0 }} />
      <CardContent>
        <Typography component="div" variant="body1" sx={{ my: 1 }}>
          Experience to be listed here
        </Typography>
      </CardContent>
    </Card>
  );
}
