

const Personaje=require('../Game/Personaje')

let Enemigo=function ()
{
     this.mover= function(){
        return Enemigo.prototype
     }
}
Enemigo.prototype=Object.create(Personaje.prototype)


module.exports=Enemigo