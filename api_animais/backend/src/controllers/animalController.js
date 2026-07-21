import  animalService  from "../services/animalService.js";

export const animalController = {
    async getAll(req, res) {
        try {
            const animals = await animalService.getAll();
            res.json(animals);
        }catch (error) {
            res.status(404).json({error: error.message });
        }
    },

    async getById(req, res) {
        try {
            const animal = await animalService.getAnimal(req.params.id);
            res.json(animal);

        }catch (error) {
            res.status(404).json({error: error.message });
    }

 },

    async create(req, res) {
        try {
            const novoAnimal = await animalService.createAnimal(req.body);
            res.status(201).json(novoAnimal);
        }catch (error){
            res.status(400).json({error: error.message });
        }

    },

    async update(req, res) {
        try{
           const animalAtualizado = await animalService.updateAnimal(
            req.params.id, req.body);
            res.json(animalAtualizado);
        }catch (error){
            const status = error.message === "Animal não encontrado" ? 404 : 400;
           status(status).json({error: error.message });
        }
    },

    async patch (req, res) {
        try{
          const animalAlterado = await animalService.patchAnimal(req.params.id, req.body);
            res.json(animalAlterado);
        }catch (error){
            const status = error.message === "Animal não encontrado" ? 404 : 400;
            res.status(status).json({error: error.message });
        }
    }, 
    
    async delete(req, res) {
    try {
        const animalDeletado = await animalService.deleteAnimal(req.params.id);
        
        res.json({
            message: `Animal removido com sucesso do ZOO: ${animalDeletado.nome}`
        });

    } catch (error) {
        const status = error.message === "Animal não encontrado" ? 404 : 400;
        res.status(status).json({ error: error.message });
    }
  },
  

  async delete(req, res) {
    try {
        const animalDeletado = await animalService.deleteAnimal(req.params.id);
        
        res.json({
            message: `Animal removido com sucesso do ZOO: ${animalDeletado.nome}`
        });

    } catch (error) {
        const status = error.message === "Animal não encontrado" ? 404 : 400;
        res.status(status).json({ error: error.message });
    }
  },
}




     

    



            