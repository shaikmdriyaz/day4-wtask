import express from "express";

const app = express();

const PORT = 5004;

//Set EJS as the view engine
app.set("view engine","ejs")

app.get("/", (req,res) => {

    const userName = "riyaz"
    res.render("index",{userName})
});



app.listen(PORT,() =>{
    console.log(`server is running at http://localhost:${PORT}`);
}); 