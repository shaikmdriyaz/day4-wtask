import express from "express";
import { userLogin } from "./controller.js";
import { userSignup } from "./controller.js";

const app = express();

const PORT = 5004;

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/user/login",userLogin)
app.get("/user/signup",userSignup)


app.listen(PORT,() =>{
    console.log(`server is running at http://localhost:${PORT}`);
}); 