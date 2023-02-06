function Personaje (nombre,edad,apellido){
    this.nombre=nombre
    this.edad=edad
    this.apellido=apellido
    Personaje.prototype.mover=function(Pos){

        return 'se me mueve 1 paso a la '+Pos

    }
    Personaje.prototype.presentar=function(){
        return this.nombre+''+this.apellido+''+this.edad
    }




}
module.exports=Personaje