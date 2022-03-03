const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());


//ROUTES//

//create a todo

app.post("/todos", async(req, res) => {
    
})

//get all todos

//get a todo

//edit a todo

//delete a todo

app.listen(5000, () => {
    console.log('ITS WORKING!!!! IIIITTTTTSSSS WORKING!!!! on port 5000')
})