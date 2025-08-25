import express from "express";

const app = express();

const PORT = 5003;

app.get("/", (req, res) => {
    res.send("hellow world");
});

app.listen(PORT,() =>{
    console.log(`server is running at http://localhost:${PORT}`);
});