const starWarsService= require('../services/starwars.service');

exports.getPlanets = (req,res,) =>{
    let num = req.query.number;
    starWarsService.getPlanet(num).then((response)=>{
        res.send(200,response);
    }).catch((error)=>{
        res.send(500,error);
    });

};