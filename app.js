const express=require("express");
const app=express();

const port=2000;

app.set("view engine","ejs");

/* Middleware */
app.use(express.static('./static'));

app.get('/', function(req,res){
    res.render("home")
})
app.get('/about',function(req,res){
    res.render("about")
})

app.get('/contact', function(req,res){
    res.render('contact')
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})