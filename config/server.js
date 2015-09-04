const port = process.env.PORT || 3000;
const devPort = process.env.DEV_PORT || port + 1;

export default {
  env: process.env.NODE_ENV || 'development',
  port: port,
  devPort: devPort
};
