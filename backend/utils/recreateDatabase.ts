import * as fs from 'fs';
import * as path from 'path';

import { Pool } from 'mysql2/promise';
import connection from '../model/connection';


// módulo para criar/recriar a database através do script SQL do arquivo cpf.sql
export default async function recreateDatabase(conn: Pool) {
  try {
    //cria o caminho até o arquivo sql
    const importPath = path.resolve(__dirname, 'cpf.sql');
    //importa o arquivo e converte em string
    const seedDBContent = fs.readFileSync(importPath).toString();
    //separa cada query
    const queries = seedDBContent.split(';').filter((p) => p.trim());
    //executa todas as queries na database
    for (let i = 0; i < queries.length; i += 1) { 
      const query = queries[i];
      await conn.query(query);
    }
  } catch (error) {
    //caso ocorra algum erro, retorna
    console.log('Banco Falha em restaurar o Banco', error);
  }
}

//se o arquivo for executado diretamente, e não por outros scripts:
if (require.main === module) {

  recreateDatabase(connection)
    .then(async () => {
      console.log('Banco Restaurado com sucesso');
      await connection.end()
      process.exit(0);
    });
}
