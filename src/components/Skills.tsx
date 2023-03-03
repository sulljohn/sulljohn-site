import React from 'react';
import {
  Typography, Card, CardContent, CardHeader, Stack, Chip, Box,
} from '@mui/material';
import skills from '../data/skills.json';

export default function Skills() {
  return (
    <Card sx={{ my: 2 }} data-aos="fade-up">
      <CardHeader title="Skills and Certifications" sx={{ pb: 0 }} />
      <CardContent>
        {skills.data.map((item, index) => (
          <div key={item.name} data-aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`}>
            <Typography gutterBottom variant="h6" component="div" data-aos="fade-down" sx={{ mt: 2, mb: (item.note ? 0 : 2) }}>
              {item.name}
            </Typography>
            <Box sx={{ mb: 2 }}>
              {item.note !== '' ? <Typography component="i" variant="body1" sx={{ mb: 2, fontSize: '.8rem', color: 'text.secondary' }} data-aos="fade-down">{item.note}</Typography> : ''}
            </Box>
            <div className="skillCards">
              <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
                {item.list.map((item2) => (
                  item2.link !== ''
                    ? <Chip component="a" label={item2.text} key={item2.text} variant="outlined" sx={{ mr: 1, mb: 1 }} href={item2.link} target="_blank" style={{ cursor: 'pointer' }} />
                    : <Chip label={item2.text} key={item2.text} variant="outlined" sx={{ mr: 1, mb: 1 }} />
                ))}
              </Stack>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
