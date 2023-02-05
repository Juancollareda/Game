const Personaje=require('../Game/Personaje')
test('Personaje se puede mover a la derecha',()=>{
    const personaje= new Personaje
    expect(personaje.mover('derecha')).toBe('se me mueve 1 paso a la derecha');
})
test('Personaje se puede mover a la izquierda',()=>{
    const personaje= new Personaje
    expect(personaje.mover('izquierda')).toBe('se me mueve 1 paso a la izquierda');
})