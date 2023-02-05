const Personaje=require('../Game/Personaje')
test('Personaje se puede mover',()=>{
    const personaje= new Personaje
    expect(personaje.mover()).toBe('se me mueve 1 paso a la derecha');
})