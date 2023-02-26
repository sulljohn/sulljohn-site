// Source: https://stackoverflow.com/a/58556477
import process from 'process';

const development: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export default function isDev(): boolean {
  return development;
}
