

const Personaje=require('../Game/Personaje')

function Enemigo()
{
    Personaje.mover()
}
Enemigo.prototype=Object.create(Personaje.prototype)


module.exports=Enemigo