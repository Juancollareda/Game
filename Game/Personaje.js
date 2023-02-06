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
    Personaje.prototype.dano=function(atack){
        if(typeof atack == 'number'){
            this.vida=this.vida-atack    
        }else{
            throw new Error("no es numero")
        }
        
    }
    Personaje.prototype.mostrarvida=function(){
        return this.vida
    }





}
module.exports=Personaje