import userController from "../controllers/userController";
import { Router } from "express";

const routes = Router();

routes.post('/users', userController.create);
routes.get('/users', userController.index);
routes.get ('/users/search', userController.show);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);

export default routes;