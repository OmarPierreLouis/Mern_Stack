const JokeController = require("../controllers/joke.controller");

module.exports = (app)=>{
    // app.get("/api/jokes",JokeController.testJoke);
    app.get('/api/jokes/get', JokeController.getAllJokes);
    app.post('/api/jokes/new', JokeController.newJoke);
    app.get('/api/jokes/get/:id',JokeController.getOneJoke);
    app.put('/api/jokes/:id',JokeController.updateJoke);
    app.delete('/api/jokes/:id',JokeController.deleteJoke);
}

