import express from "express";
import UploadController  from "../controllers/upload.controller";
import FileMiddleware from '../middleware/upload.middleware';
const router = express.Router();


router.post("/",FileMiddleware.memoryLoader.single('data'), async (req, res) => {

    if (req.user) {
      if (req.file){
        //console.log(req.file)
        const controller = new UploadController();
        const response = await controller.uploadFile(req.body, req.file.buffer, req.file.originalname);
        return res.send(response);
      }
      else{
        res.statusCode = 404;
        return res.send({message: 'File Not Found'});
      }
       
    }
    else {
      res.statusCode = 401;
      res.send({message: 'Unauthorized'});
    }

    
    
  });

export default router