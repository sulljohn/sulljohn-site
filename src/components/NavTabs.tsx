import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { matchRoutes, useLocation, useNavigate } from 'react-router-dom';

interface LinkTabProps {
  label: string;
  href: string;
}

const routes = [
  { label: 'Info', path: '/' },
];

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }} // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

export default function NavTabs() {
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    navigate(routes[newValue].path);
  };

  const useCurrentPath = () => {
    const location = useLocation();
    const [{ route }] = matchRoutes(routes, location) ?? [];

    return route.path;
  };

  const currentRouteIndex = (): number => {
    try {
      return routes.findIndex((item) => item.path === useCurrentPath());
    } catch {
      return -1;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={currentRouteIndex()} onChange={handleChange} aria-label="nav tabs example" centered>
        {routes.map((item) => (
          <LinkTab label={item.label} href={item.path} key={item.label} />
        ))}
      </Tabs>
    </Box>
  );
}
