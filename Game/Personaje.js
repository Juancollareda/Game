function Personaje (nombre,edad,apellido){
    Personaje.prototype.nombre=nombre
    Personaje.prototype.edad=edad
    Personaje.prototype.apellido=apellido
    Personaje.prototype.mover=function(Pos){

        return 'se me mueve 1 paso a la '+Pos

    }
    Personaje.prototype.presentar=function(){
        return this.nombre+' '+this.apellido+' '+'edad'+this.edad
    }




}
module.exports=Personaje