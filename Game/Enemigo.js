

const Personaje=require('../Game/Personaje')

function Enemigo()
{
   this.mover=Personaje
}
Enemigo.prototype=Object.create(Personaje.prototype.mover)


module.exports=Enemigo