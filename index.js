const PORT = 3000;
const express = require('express');
const apiRoute = require('./routes/api');
const app = express();
const path = require("path");

app.use('/api', apiRoute);
app.use(express.static(path.join(__dirname, "public")));



//criação de porta para servidor
app.listen(PORT, () => {
    console.log("Server running on port", PORT)
});


