// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port=8006;

// Initialize the app
const app = express();

// Establish connection to the MongoDB database
mongoose.connect("mongodb+srv://poojadornal:pooja123@cluster0.cwaxtln.mongodb.net/EcommerceApi?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connection successful");
    })
    .catch((err) => {
        console.log(err);
    });



// Middleware
app.use(bodyParser.json());

// Load routes
const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})