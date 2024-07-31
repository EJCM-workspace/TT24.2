import userController from "../controllers/userController";
import { Router } from "express";
import { audioUpload,photoUpload } from "../config/uploader";

const routes = Router();

routes.post('/users', userController.create);
routes.get('/users', userController.index);
routes.get ('/users/search', userController.show);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);
routes.get('/email/:id',userController.sendEmailToUser)


routes.post("/users/profile/image",photoUpload.single("image"), async (req,res) => {

    try{
        res.status(201).json({message:"Arquivo enviado Com Sucesso!"})
    }catch(error:any){
        res.status(500).json({message:error.messsage})
    }

})

routes.post("/users/prifile/audio",audioUpload.single("audio"), async (req,res) => {

    try{
        res.status(201).json({message:"Arquivo enviado"})
    }catch(error:any){
        res.status(500).json({message:error.messsage})
    }


})



export default routes;