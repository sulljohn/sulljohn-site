import React from 'react';
import {
  Typography, Card, CardContent, CardHeader, Grid, CardActions, Button, CardMedia,
} from '@mui/material';
import projects from '../data/projects.json';

const req = require.context('../res/projects/', false, /\.(jpe?g|png|gif|svg)$/);

// Card source: https://www.youtube.com/watch?v=UNCq01LNNrg
export default function Projects() {
  return (
    <Card sx={{ my: 2 }}>
      <CardHeader title="Projects" sx={{ pb: 0 }} />
      <CardContent>
        <Typography component="div" variant="body1" sx={{ my: 1 }}>
          <Grid container spacing={2}>
            {
              projects.data.map((item) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ my: 2 }}>
                    <CardMedia
                        /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-argument */
                      image={req(item.image)}
                      sx={{ height: 400 }}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.text}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Link</Button>
                      <Button size="small">Code</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        </Typography>
      </CardContent>
    </Card>
  );
}
