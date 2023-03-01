import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  Button, ButtonGroup, Typography, Container, Link,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Routes, Route,
} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ErrorPage from './ErrorPage';
import Info from './Info';
import Artwork from './Artwork';
import NavTabs from '../components/NavTabs';
import Footer from '../components/Footer';

interface IProps {
  mode: 'light' | 'dark' | 'system',
  setMode: Dispatch<SetStateAction<'light' | 'dark' | 'system'>>
}

function MyApp({ mode, setMode }: IProps) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    AOS.init();
  }, []);

  // Handling AOS refresh effect on state
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    AOS.refresh();
  }, [mode]);

  const handleChangeThemeMode = (paletteMode: 'light' | 'dark' | 'system') => {
    setMode(paletteMode);
    localStorage.setItem('mui-mode', paletteMode);
  };

  return (
    <Container maxWidth="lg" sx={{ p: 2 }}>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2,
        }}
      >
        <Link sx={{ fontWeight: 'bold' }} color="inherit" underline="none" href="/">
          John Sullivan
        </Link>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography component="div" variant="body1" sx={{ mr: 1 }}>
            Theme:
          </Typography>
          <ButtonGroup variant="outlined" aria-label="outlined button group" size="small">
            <Button onClick={() => handleChangeThemeMode('light')} disabled={mode === 'light'}>Light</Button>
            <Button onClick={() => handleChangeThemeMode('system')} disabled={mode === 'system'}>System</Button>
            <Button onClick={() => handleChangeThemeMode('dark')} disabled={mode === 'dark'}>Dark</Button>
          </ButtonGroup>
        </Box>
      </Box>
      <NavTabs />
      <Routes>
        <Route path="/" element={<Info mode={mode} />} />
        <Route path="/artwork" element={<Artwork />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer mode={mode} />
    </Container>
  );
}

export default function App() {
  const getStoredColor = (): 'light' | 'dark' | 'system' => {
    if (!localStorage.getItem('mui-mode')) return 'system';
    if (localStorage.getItem('mui-mode') === 'system') return 'system';
    if (localStorage.getItem('mui-mode') === 'dark') return 'dark';
    return 'light';
  };

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState<'light' | 'dark' | 'system'>(getStoredColor());

  const finalMode = mode === 'system' ? (prefersDarkMode ? 'dark' : 'light') : mode; // eslint-disable-line no-nested-ternary

  const theme = React.useMemo(
    () => createTheme({
      palette: {
        mode: finalMode,
        background: {
          default: finalMode === 'light' ? '#F5F7FC' : '#0F0F0F',
        },
      },
    }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyApp mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
}
