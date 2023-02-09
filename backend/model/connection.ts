import * as mysql from 'mysql2/promise';

export default mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  password: process.env.MYSQL_PASSWORD,
  user: process.env.MYSQL_USER,
});