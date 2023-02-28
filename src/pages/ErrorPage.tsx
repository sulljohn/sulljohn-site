// import { useRouteError } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import React from 'react';

// interface ErrorType {
//   statusText: string,
//   message: string,
// }

export default function ErrorPage() {
  // const error = useRouteError() as ErrorType;

  return (
    <Card sx={{ my: 2 }}>
      <CardHeader title="Oops!" sx={{ pb: 0 }} />
      <CardContent>
        <Typography component="div" variant="body1" sx={{ my: 1 }}>
          Sorry, an unexpected error has occurred.
        </Typography>
      </CardContent>
      <CardContent>
        <Typography component="div" variant="body1" sx={{ my: 1 }}>
          {/* {error.statusText || error.message} */}
        </Typography>
      </CardContent>
    </Card>
  );
}
