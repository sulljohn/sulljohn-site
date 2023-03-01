import React from 'react';
import {
  Typography, Card, CardContent, CardHeader, Grid, CardActions, Button, CardMedia,
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Slide, Chip, Stack, Box,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import projects from '../data/projects.json';

const req = require.context('../res/projects/', false, /\.(jpe?g|png|gif|svg)$/);

// Source: https://mui.com/material-ui/react-dialog/#transitions
const Transition = React.forwardRef((
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
  // eslint-disable-next-line react/jsx-props-no-spreading
) => <Slide direction="up" ref={ref} {...props} />);

interface IProps {
  mode: 'light' | 'dark' | 'system'
}

// Card source: https://www.youtube.com/watch?v=UNCq01LNNrg
export default function Projects({ mode }: IProps) {
  const [open, setOpen] = React.useState(false); // Whether modal open or not
  const [project, setProject] = React.useState(projects.data[0]); // Store project for modal

  const handleClickOpen = (index: number) => {
    setOpen(true);
    setProject(projects.data[index]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ my: 2 }}>
      <CardHeader title="Projects" sx={{ pb: 0 }} />
      <CardContent>
        <Typography component="div" variant="body1" sx={{ my: 1 }}>
          <Grid container spacing={2}>
            {
              projects.data.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={item.title}>
                  <Card sx={{ my: 2, backgroundColor: mode === 'light' ? '#fcfcfb' : '#1c1c1c' }}>
                    <CardMedia
                        /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-argument */
                      image={req(item.image)}
                      sx={{ height: 400 }}
                      title={`${item.title}`}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.short_text}
                      </Typography>
                    </CardContent>
                    <Stack direction="row" spacing={1} sx={{ px: 2 }}>
                      {
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
                        item.languages.map((language) => (
                          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
                          <Chip label={language.name} key={language.name} variant="outlined" size="small" />
                        ))
                      }
                    </Stack>
                    <CardActions>
                      {item.link !== '' ? <Button size="small">Link</Button> : ''}
                      {item.code !== '' ? <Button size="small">Code</Button> : ''}
                      <Button size="small" onClick={() => handleClickOpen(index)}>More Info</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        </Typography>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          maxWidth="xs"
        >
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-argument */}
          <img src={req(project.image)} alt={`${project.title}`} />
          <DialogTitle sx={{ pb: 1 }}>{project.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {project.long_text}
            </DialogContentText>
          </DialogContent>
          <Stack direction="row" spacing={1} sx={{ mx: 3, mt: 2 }}>
            {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
              project.languages.map((language) => (
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
                <Chip label={language.name} key={language.name} variant="outlined" size="small" />
              ))
            }
          </Stack>
          <Box sx={{
            mx: 2, my: 1, display: 'flex', justifyContent: 'space-between',
          }}
          >
            <div>
              {project.link !== '' ? <Button size="small">Link</Button> : ''}
              {project.code !== '' ? <Button size="small">Code</Button> : ''}
            </div>
            <div>
              <Button onClick={handleClose}>Close</Button>
            </div>
          </Box>
        </Dialog>
      </CardContent>
    </Card>
  );
}
