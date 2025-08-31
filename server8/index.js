import express from "express";
const app = express();

const PORT = 5004;

app.use("/welcome",(req,res,next) => {
    console.log("A new request received at"+Date.now())
    nect()
})

app.get("/", (req,res) => {
    res.send("hello world");
});

app.get("/welcome", (req,res) => {
    res.send("welcome to express app");
});

app.listen(PORT,() =>{
    console.log(`server is running at http://localhost:${PORT}`);
}); 