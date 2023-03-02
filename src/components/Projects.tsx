import React from 'react';
import {
  Typography, Card, CardContent, CardHeader, Grid, CardActions, Button, CardMedia,
  Dialog, DialogTitle, DialogContent, DialogContentText, Slide, Chip, Stack, Box,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import projects from '../data/projects.json';

const req = require.context('../res/projects/', false, /\.(jpe?g|png|gif|svg)$/);

// Source: https://mui.com/material-ui/react-dialog/#transitions
const Transition = React.forwardRef((
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    <Card sx={{ my: 2 }} data-aos="fade-up">
      <CardHeader title="Personal Projects" sx={{ pb: 0 }} />
      <CardContent>
        <Typography component="div" variant="body1" sx={{ my: 1 }}>
          <Grid container spacing={2}>
            {
              projects.data.map((item, index) => (
                <Grid item xs={12} sm={12} md={6} lg={6} key={item.title}>
                  <Card sx={{ my: 2, backgroundColor: mode === 'light' ? '#fcfcfb' : '#1c1c1c' }} data-aos="fade-up">
                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-argument */}
                    {item.image !== '' ? <img src={req(item.image)} alt={`${item.title}`} style={{ width: '100%' }} /> : ''}
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
                    <CardActions disableSpacing>
                      {item.link !== '' ? <Button size="small" href={item.link} target="_blank" sx={{ mr: 0.5 }}>Link</Button> : ''}
                      {item.paper !== '' ? <Button size="small" href={item.paper} target="_blank" sx={{ mr: 0.5 }}>Paper</Button> : ''}
                      {item.code !== '' ? <Button size="small" href={item.code} target="_blank" sx={{ mr: 0.5 }}>Code</Button> : ''}
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
          {project.image !== '' ? <img src={req(project.image)} alt={`${project.title}`} style={{ width: '100%' }} /> : ''}
          <DialogTitle sx={{ pb: 1 }}>{project.title}</DialogTitle>
          <DialogContent sx={{ pb: 0 }}>
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
              {project.link !== '' ? <Button size="small" href={project.link} target="_blank" sx={{ mr: 0.5 }}>Link</Button> : ''}
              {project.paper !== '' ? <Button size="small" href={project.paper} target="_blank" sx={{ mr: 0.5 }}>Paper</Button> : ''}
              {project.code !== '' ? <Button size="small" href={project.code} target="_blank">Code</Button> : ''}
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
