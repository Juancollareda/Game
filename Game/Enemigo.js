

const Personaje=require('../Game/Personaje')

function Enemigo()
{
    Enemigo.prototype.saltar=function(){

        return "salto enemigo"
    }
}
Enemigo.prototype=Object.create(Personaje.prototype)


module.exports=Enemigo