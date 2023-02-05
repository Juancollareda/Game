

const Personaje=require('../Game/Personaje')

function Enemigo()
{
    Personaje.mover(this)
}
Enemigo.prototype=Object.create(Personaje.prototype)


module.exports=Enemigo