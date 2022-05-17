const mongoose = require('mongoose'); //Mongoose connection

mongoose.connect('mongodb+srv://root:root@merncluster.1essl.mongodb.net/Jokes_db?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));