function Personaje (nombre,edad,apellido,vida){
    this.nombre=nombre
    this.edad=edad
    this.apellido=apellido
    this.vida=vida
    
    Personaje.prototype.mover=function(Pos){

        return 'se me mueve 1 paso a la '+Pos

    }
    Personaje.prototype.presentar=function(){
        return this.nombre+' '+this.apellido+' '+'edad'+this.edad
    }




}
module.exports=Personaje