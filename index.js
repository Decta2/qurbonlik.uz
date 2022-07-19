import express  from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";
import path from "path";
import { Router } from "express";
const PORT = process.env.PORT || 80;

const DB_URL = `mongodb+srv://user:user@cluster0.mwpeo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 
app.use('/api', router)
app.use(fileUpload({}))
app.get('/', (req,res) =>{
    res.sendFile(path.join(path.resolve()+'/views/main.html'));
})
app.use('/static', express.static(path.join(path.resolve()+'/views/static')))
app.get('/order', (req,res) =>{
    res.sendFile(path.join(path.resolve()+'/views/to_order.html'));
})
app.get('/client', (req,res) =>{
    res.sendFile(path.join(path.resolve()+'/views/clinet.html'));
})
app.get('/home', (req,res) =>{
    res.sendFile(path.join(path.resolve()+'/views/main.html'));
})

async function startApp(){
    try{
        await mongoose.connect(DB_URL, {useUnifiedTopology:true, useNewUrlParser:true})
        app.listen(PORT, () => console.log('Server started on PORT ' + PORT));
    }
    catch (e){
        console.log(e)
    }
}
startApp()
