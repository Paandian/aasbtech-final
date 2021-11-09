module.exports = {
  HOST: 'eu-cdbr-west-01.cleardb.com',
  USER: 'b5daf080ec8e0f',
  PASSWORD: '471ae220',
  DB: 'heroku_d236a6a9d7658e5',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
