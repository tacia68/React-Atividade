import { Sequelize } from 'sequelize-typescript';

const connection = new Sequelize({
  dialect: 'mysql',
  port: 3307,
  host: 'localhost',
  username: 'root',
  password: 'admin',
  database: 'lojavirtual',
  logging: false,
});

export default connection;