const Personaje=require('../Game/Personaje')
const Enemigo = require('../Game/Enemigo')
test('Personaje se puede mover a la derecha',()=>{
    const personaje= new Personaje
    expect(personaje.mover('derecha')).toBe('se me mueve 1 paso a la derecha');
})
test('Personaje se puede mover a la izquierda',()=>{
    const personaje= new Personaje
    expect(personaje.mover('izquierda')).toBe('se me mueve 1 paso a la izquierda');
})
test('enemigo se puede mover a la izquierda',()=>{
    const enemigo= new Enemigo
    expect(enemigo.mover('izquierda')).toBe('se me mueve 1 paso a la izquierda');
})
test('enemigo salta',()=>{
    const enemigo= new Enemigo
    const personaje= new Personaje

    expect(enemigo.saltar()).toBe('salto enemigo');
})
test('capturar error',()=>{
    const enemigo= new Enemigo
    const personaje= new Personaje

    expect(enemigo.saltar()).toBe('salto enemigo');
})
test('enemigo se presenta',()=>{
    const enemigo= new Enemigo('juan',11,'sanchez')
    expect(enemigo.presentar()).toBe('juan sanchez edad'+11);
})
test('enemigo se recibe dano',()=>{
    const enemigo= new Enemigo('juan',11,'sanchez')
    enemigo.dano(10)
    expect(enemigo.mostrarvida()).toBe(90);
})
test('error no es num',()=>{
    const enemigo= new Enemigo('juan',11,'sanchez')
 
    expect(() => {
        enemigo.dano(1)
      }).toThrow('no es numero');
    
})