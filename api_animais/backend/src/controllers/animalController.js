import  animalService  from "../services/animalService.js";

export const animalController = {
    async getAll(req, res) {
        try {
            const animals = await animalService.getAll();
            res.json(animals);
        }catch (error) {
            res.status(404).json({error: error.message });
        }
    }
}



            