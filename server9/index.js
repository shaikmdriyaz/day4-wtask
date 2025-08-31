import express from "express";
const app = express();

const PORT = 5004;

app.get("/", (req,res) => {
    console.log("Middle")
    res.send("hello world");
});

app.get("/error",() => {
   throw new Error("This is test error")
})

app.use((err,req,res,next) => {
    console.error(err.message)
    res.send("Internal Server Error")
})

app.listen(PORT,() =>{
    console.log(`server is running at http://localhost:${PORT}`);
}); 