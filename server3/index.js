import express from "express";
import { searchController, usernameController } from "./controller";

const app = express();

const PORT = 5004;

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/user/:username",usernameController)

//search?keyword=express
app.get("/search",searchController)

app.listen(PORT,() =>{
    console.log(`server is running at http://localhost:${PORT}`);
}); 