const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Chef is running')
});

app.get('/categories', (req, res) =>{
    res.send(categories);
})
app.get('/categories/:id', (req, res) =>{
    const id = req.params.id;
    const singleChef = categories.find(pd => pd.id == id);
    res.send({singleChef});
    
})

app.listen(port, () => {
    console.log(`Chef is running on port: ${port}`);
})