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
    expect(enemigo.saltar()).toBe('salto enemigo');
})