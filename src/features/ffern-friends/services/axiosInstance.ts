import axios from 'axios';

const basicAuth = Buffer.from(
  `${process.env.NEXT_PUBLIC_API_USERNAME}:${process.env.NEXT_PUBLIC_API_PASSWORD}`
).toString('base64');

const FfernClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Basic ${basicAuth}`,
  },
});

FfernClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('Response Error Message:', error.message);

    return Promise.reject(error);
  }
);

// FUTURE IMPROVEMENT: link to logging service e.g. Datadog

export default FfernClient;
