const Personaje = require('./Personaje')

Personaje=require('../Game/Personaje')

function Enemigo ()
{
     
}
Enemigo.prototype=Object.create(Personaje.prototype)
Enemigo.prototype.constructor=Personaje   

module.exports=Enemigo