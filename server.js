// DEPENDENCIES 
const express = require('express');
const routes = require('./routes/index')

//DATA 

//APP PORT
const app = express();
const PORT = process.env.PORT || 4000;

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:true }))
app.use(express.statis("public"));

//ROUTES


//default route wildcard 
app.get("*", (req,res) =>
res.send("you need to add routes to see anything!")
)

app.use(routes);
// const api =require('./routes/index.js');
// app.use('/api', api);

// START THE SERVER
app.listen(PORT, () =>
console.log(`Server is running on https://localhost:${PORT}`))

//add express, nodemon, 