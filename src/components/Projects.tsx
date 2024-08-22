import React from 'react';
import {
  Typography, Card, CardContent, CardHeader, Grid, CardActions, Button,
  Dialog, DialogTitle, DialogContent, DialogContentText, Slide, Chip, Stack, Box,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import projects from '../data/projects.json';

const images = import.meta.globEager('../res/projects/*.{jpg,jpeg,png,gif,svg}');

// Source: https://mui.com/material-ui/react-dialog/#transitions
const Transition = React.forwardRef((
  props: TransitionProps & {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      children: React.ReactElement<any, any>;
    },
  ref: React.Ref<unknown>,
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

  // Function to get the image path
  const getImagePath = (imageName: string) => {
    // Extract the filename from the provided image name
    const filename = imageName.split('/').pop();

    // Construct the path that matches the keys used by import.meta.globEager
    const imagePath = `../res/projects/${filename}`;
    // Return the default export of the matching image if it exists
    return images[imagePath]?.default || '';
  };
  return (
    <Card sx={{ my: 2 }} data-aos="fade-up">
      <CardHeader title="Personal Projects" sx={{ pb: 0 }} />
      <CardContent>
        <Typography component="div" variant="body1" sx={{ my: 1 }}>
          <Grid container spacing={2}>
            {
              projects.data.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={item.title}>
                  <Card sx={{ my: 2, backgroundColor: mode === 'light' ? '#fcfcfb' : '#1c1c1c' }} data-aos="fade-up">
                    {item.image !== '' && (
                      <img src={getImagePath(item.image)} alt={`${item.title}`} style={{ width: '100%' }} />
                    )}
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.short_text}
                      </Typography>
                    </CardContent>
                    <Stack direction="row" sx={{ px: 2, flexWrap: 'wrap' }}>
                      {item.languages.map((language) => (
                        <Chip label={language.name} key={language.name} variant="outlined" size="small" sx={{ mr: 0.5, mb: 0.5 }} />
                      ))}
                    </Stack>
                    <CardActions disableSpacing>
                      {item.site !== '' && <Button size="small" href={item.site} target="_blank" sx={{ mr: 0.5 }}>Site</Button>}
                      {item.paper !== '' && <Button size="small" href={item.paper} target="_blank" sx={{ mr: 0.5 }}>Paper</Button>}
                      {item.presentation !== '' && <Button size="small" href={item.presentation} target="_blank" sx={{ mr: 0.5 }}>Deck</Button>}
                      {item.code !== '' && <Button size="small" href={item.code} target="_blank" sx={{ mr: 0.5 }}>Code</Button>}
                      <Button size="small" onClick={() => handleClickOpen(index)}>+ Info</Button>
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
          maxWidth="sm"
        >
          {project.image !== '' && (
            <img src={getImagePath(project.image)} alt={`${project.title}`} style={{ width: '100%' }} />
          )}
          <DialogTitle sx={{ pb: 1 }}>{project.title}</DialogTitle>
          <DialogContent sx={{ pb: 0 }}>
            <DialogContentText id="alert-dialog-slide-description" style={{ overflow: 'scroll', fontSize: '.9rem' }}>
              {project.long_text}
            </DialogContentText>
          </DialogContent>
          <Stack direction="row" spacing={1} sx={{ mx: 3, mt: 2, flexWrap: 'wrap' }}>
            {project.languages.map((language) => (
              <Chip label={language.name} key={language.name} variant="outlined" size="small" sx={{ mr: 0.5, mb: 0.5 }} />
            ))}
          </Stack>
          <Box sx={{
            mx: 2, my: 1, display: 'flex', justifyContent: 'space-between',
          }}>
            <div>
              {project.site !== '' && <Button size="small" href={project.site} target="_blank" sx={{ mr: 0.5 }}>Site</Button>}
              {project.paper !== '' && <Button size="small" href={project.paper} target="_blank" sx={{ mr: 0.5 }}>Paper</Button>}
              {project.presentation !== '' && <Button size="small" href={project.presentation} target="_blank" sx={{ mr: 0.5 }}>Deck</Button>}
              {project.code !== '' && <Button size="small" href={project.code} target="_blank">Code</Button>}
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
