const Personaje = require('./Personaje')

Personaje=require('../Game/Personaje')

function Enemigo ()
{
    Enemigo.prototype=Object.create(Personaje.prototype)
}
module.exports=Enemigo