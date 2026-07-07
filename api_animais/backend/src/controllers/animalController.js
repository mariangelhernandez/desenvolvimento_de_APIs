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
    }
}



     

    



            