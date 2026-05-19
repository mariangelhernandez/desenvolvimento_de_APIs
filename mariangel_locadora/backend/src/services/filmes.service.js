const pool = require('../config/db');

class FilmesService {
  // CREATE
  async criarFilme(nome, categoria) {
    try {
      const query = 'INSERT INTO filmes (nome, categoria) VALUES ($1, $2) RETURNING *';
      const resultado = await pool.query(query, [nome, categoria]);
      return resultado.rows;
    } catch (error) {
      throw new Error(`Erro ao criar filme: ${error.message}`);
    }
  }

  // READ (Todos)
  async listarFilmes() {
    try {
      const query = 'SELECT * FROM filmes';
      const resultado = await pool.query(query);
      return resultado.rows;
    } catch (error) {
      throw new Error(`Erro ao listar filmes: ${error.message}`);
    }
  }

  // READ (Por ID)
  async buscarFilmePorId(id) {
    try {
      const query = 'SELECT * FROM filmes WHERE id = $1';
      const resultado = await pool.query(query, [id]);
      return resultado.rows;
    } catch (error) {
      throw new Error(`Erro ao buscar filme: ${error.message}`);
    }
  }

  // UPDATE
  async atualizarFilme(id, nome, categoria) {
    try {
      const query = 'UPDATE filmes SET nome = $1, categoria = $2 WHERE id = $3 RETURNING *';
      const resultado = await pool.query(query, [nome, categoria, id]);
      return resultado.rows;
    } catch (error) {
      throw new Error(`Erro ao atualizar filme: ${error.message}`);
    }
  }

  // DELETE
  async deletarFilme(id) {
    try {
      const query = 'DELETE FROM filmes WHERE id = $1 RETURNING *';
      const resultado = await pool.query(query, [id]);
      return resultado.rows;
    } catch (error) {
      throw new Error(`Erro ao deletar filme: ${error.message}`);
    }
  }
}

// Exporta uma instância da classe, conforme exigido
module.exports = new FilmesService();