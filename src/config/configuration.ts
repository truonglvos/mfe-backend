export default () => ({
  JWT_ACCESS_SECRET: {
    secretKey: process.env.JWT_ACCESS_SECRET,
    expirationTime: parseInt(process.env.JWT_EXPIRATION_TIME),
  },
  JWT_REFRESH_SECRET: {
    secretKey: process.env.JWT_REFRESH_SECRET,
    expirationTime: parseInt(process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME),
  },
  database: {
    master: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    slaves: [
      {
        host: process.env.DB_SLAVE_HOST,
        port: parseInt(process.env.DB_SLAVE_PORT),
        username: process.env.DB_SLAVE_USERNAME,
        password: process.env.DB_SLAVE_PASSWORD,
        database: process.env.DB_DATABASE,
      },
    ],
  },
});
