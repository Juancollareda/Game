

const Personaje=require('../Game/Personaje')

function Enemigo(nombre,edad,apellido)
{
    this.nombre=nombre
    this.edad=edad
    this.apellido=apellido
    Enemigo.prototype.saltar=function(){

        return "salto enemigo"
    }
}
Enemigo.prototype=Object.create(Personaje.prototype)


module.exports=Enemigo