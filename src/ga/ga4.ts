/* eslint-disable */
// Source: https://stackoverflow.com/a/73295380
import ga4 from 'react-ga4';

const TRACKING_ID = 'UA-148362750-1';
const isProduction = process.env.NODE_ENV === 'production';

export const init = () => ga4.initialize(TRACKING_ID, {
  testMode: !isProduction,
});

export const sendEvent = (name: string) => ga4.event('screen_view', {
  app_name: 'sulljohn',
  screen_name: name,
});

export const sendPageview = (path: string) => ga4.send({
  hitType: 'pageview',
  page: path,
});
