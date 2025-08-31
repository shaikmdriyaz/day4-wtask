import express from "express";
import multer from "multer";
import { storage } from "./config/multer.js";

const app = express();

const upload = multer({
    storage,
    limits:{
        fileSize: 1024000
    }
});

const PORT = 5004;

app.use(express.urlencoded({extended:true}))
//app.use(upload.array())
app.use(upload.single("image"))

app.get("/", (req,res) => {
    res.send("hello world")
});

app.post("/form", (req,res) => {
    console.log(req.body)
    console.log(req.file);
    res.send("Form Recieved")
})

app.listen(PORT,() =>{
    console.log(`server is running at http://localhost:${PORT}`);
}); 