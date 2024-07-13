import type { Session } from '@remix-run/node';
import axios from 'axios';

const baseURL = process.env.APP_API_BASE_URL;

export const client = axios.create({
  baseURL,
});

export function clientFromSession(session?: Session) {
  const baseURL = process.env.APP_API_BASE_URL;

  const c = axios.create({
    baseURL,
  });

  if (session === undefined) {
    return c;
  }

  const accessToken = session.get('accessToken');
  if (accessToken && accessToken !== '') {
    c.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  }

  return c;
}

export default client;
