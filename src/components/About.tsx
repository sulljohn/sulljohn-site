import React from 'react';
import {
  Typography, Card, CardContent, CardHeader,
} from '@mui/material';
import about from '../data/about.json';

export default function About() {
  return (
    <Card sx={{ my: 2 }} data-aos="fade-up">
      <CardHeader title="About Me" sx={{ pb: 0 }} />
      <CardContent>
        <Typography component="div" variant="body1" sx={{ my: 1 }}>
          {about.text}
        </Typography>
      </CardContent>
    </Card>
  );
}
