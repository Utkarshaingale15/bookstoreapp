const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const cors = require("cors");
const app = express();


//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router);       // http://localhost:5000/books


mongoose.connect(
    "mongodb+srv://Bookstore:BookStore2404@cluster.dn2xe.mongodb.net/Book-Store?retryWrites=true&w=majority"
)
.then(() => console.log("Connected to database!"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));



