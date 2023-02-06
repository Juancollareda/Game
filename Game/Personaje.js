function Personaje (nombre,edad,apellido){
    this.nombre=nombre
    this.edad=edad
    this.apellido=apellido
    this.vida=100

    Personaje.prototype.mover=function(Pos){

        return 'se me mueve 1 paso a la '+Pos

    }
    Personaje.prototype.presentar=function(){
        return this.nombre+' '+this.apellido+' '+'edad'+this.edad
    }
    Personaje.prototype.dano=function(){
        return this.nombre+' '+this.apellido+' '+'edad'+this.edad
    }
    Personaje.prototype.mostrarvida=function(atack){
        return this.vida-atack
    }





}
module.exports=Personaje