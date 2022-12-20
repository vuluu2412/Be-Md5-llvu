import express from 'express';
import cors from "cors"
import {router} from "./src/router/router";
import fileUpload from "express-fileupload";

const app = express();
app.use(cors())
app.use(express.static('public'));
app.use(express.json());
app.use(fileUpload({
    createParentPath: true
}));
app.use('',router)

const POST = 8080;
app.listen(POST,()=>{
    console.log('server is running');
});