import express from "express";

const app = express();

const PORT = 5004;

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/about", (req, res) => {
    res.send("This is about route");
});

app.listen(PORT,() =>{
    console.log(`server is running at http://localhost:${PORT}`);
}); 