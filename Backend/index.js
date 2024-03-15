const express = require('express');
var cors = require('cors')
const app = express();
const { sequelize } = require('./Schema');
const { router } = require('./routes/movies.router');
app.use(express.json())

app.use(cors())

app.get('/', (req, res)=>{
    res.send('Hello World!');
})

app.use('/movie', router);

sequelize.sync().then(()=>{
    console.log('Database connected');
    app.listen(8080, ()=>{
        console.log('Listening on port 8080');
    })
}).catch((err)=>{
    console.log(err);
})
