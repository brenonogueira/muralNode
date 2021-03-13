const express = require('express');
const bodyParser = require('body-parser');
const posts = require('../model/posts');
const cors = require('cors');
const router = express.Router();

//pegar rota - liberar que qualquer site possa fazer fetch
const options = {
    origin: "http://locahost:3000"
}

router.use(cors(options));



//criação de rota tipo get para buscar dado
router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()))
});

//criação de rota tipo post para adicionar novo dado 
router.post("/new", bodyParser.json(), (req, res) =>{
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);

    res.send("Post adicionado");

});

module.exports = router;