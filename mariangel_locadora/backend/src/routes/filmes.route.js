const { Router } = require('express');
const filmesService = require('../services/filmes.service');

const router = Router();

// Rota para Listar todos os filmes
router.get('/', async (req, res) => {
  try {
    const filmes = await filmesService.listarFilmes();
    res.json(filmes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para Buscar filme por ID
router.get('/:id', async (req, res) => {
  try {
    const filme = await filmesService.buscarFilmePorId(req.params.id);
    if (!filme) return res.status(404).json({ message: 'Filme não encontrado' });
    res.json(filme);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para Criar um filme
router.post('/', async (req, res) => {
  try {
    const { nome, categoria } = req.body;
    if (!nome || !categoria) {
      return res.status(400).json({ message: 'Nome e categoria são obrigatórios.' });
    }
    const novoFilme = await filmesService.criarFilme(nome, categoria);
    res.status(201).json(novoFilme);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para Atualizar um filme
router.put('/:id', async (req, res) => {
  try {
    const { nome, categoria } = req.body;
    const filmeAtualizado = await filmesService.atualizarFilme(req.params.id, nome, category);
    if (!filmeAtualizado) return res.status(404).json({ message: 'Filme não encontrado' });
    res.json(filmeAtualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para Deletar um filme
router.delete('/:id', async (req, res) => {
  try {
    const filmeDeletado = await filmesService.deletarFilme(req.params.id);
    if (!filmeDeletado) return res.status(404).json({ message: 'Filme não encontrado' });
    res.json({ message: 'Filme deletado com sucesso!', filme: filmeDeletado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;