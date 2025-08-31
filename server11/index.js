import express from "express";

const app = express();

const PORT = 5004;

app.use("/public",express.static("public"))
app.use("/images",express.static("images"))

app.get("/", (req,res) => {
    res.send("hello world")
});



app.listen(PORT,() =>{
    console.log(`server is running at http://localhost:${PORT}`);
}); 