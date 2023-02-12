import * as mysql from 'mysql2/promise';

//cria a conexão à database, conforme variáveis de ambiente constantes no docker-compose file
export default mysql.createPool({
	host: process.env.MYSQL_HOST || 'localhost',
	password: process.env.MYSQL_PASSWORD,
	user: process.env.MYSQL_USER,
});
