const mongoose = require('mongoose'); //Mongoose connection
const db_name = "Project_db";


mongoose.connect(`mongodb+srv://root:root@merncluster.1essl.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));