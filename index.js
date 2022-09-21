//1-creer le serveur
const express=require('express');
const app=express();

//3-importer les middlewares locals
const middleware = require('./MiddlewareLocal');
const global=require('./handleErrorMiddleware');

//Global middleware  to parse json data
    app.use(express.json());

app.use(middleware);


const PORT=4000;
//configuration des parametres de l'application pour utiliser Template engine
    app.set('view engine', 'pug');
    app.set('views','./views');

app.listen(PORT,(err)=>{
    if(err)
    {console.log(err);}
console.log(`Server is listening on port ${PORT}`);

});

//2-Gestion des routes
    app.get('/',(req, res)=>{
        res.render('Home');
    });
    app.get('/service',(req, res)=>{
        res.render('Service');
    });
    app.get('/contact', (req, res)=>{
        res.render('Contact');
    });

//S'il ya une erreur le middleware de gestion d'erreurs va s'executer
    app.use(global)