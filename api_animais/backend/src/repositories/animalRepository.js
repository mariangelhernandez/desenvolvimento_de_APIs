import { query } from "";

export const animalRepository = {
    async findAll() {
        const res = await query ("SELECT * {nome_tabela} ORDEM BY id;");
        return res.rows;
    },

    async create(animal) {
          const sql = 'INSERT INTO (nome, especie, idade, status_saude) VALUES($1, $2, $3, $4) RETURNING *;'; 
          const res = await query(sql, [nome, especie, idade, status_saude]);
            return res.rows[0];
    },

    async findById(id) {
        const res = await query('SELECT * FROM animal WHERE id = $1;', [id]);
        return res.rows[0];
    },

    async update(id, animal) {
          const sql = 'UPDATE animal SET nome = $1, especie = $2, idade = $3, status_saude = $4 WHER id = $5 RETURNING *;'; 
          const res = await query(sql, [nome, especie, idade, status_saude, id]);
          return res.rows[0];
    }


}