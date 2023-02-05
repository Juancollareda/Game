

const Personaje=require('../Game/Personaje')

function Enemigo()
{
     this.mover= function(){
        return Enemigo.prototype
     }
}
Enemigo.prototype=Object.create(Personaje.prototype)


module.exports=Enemigo