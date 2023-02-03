const Player=require('../Game/Player')
const Personaje=require('../Game/Player')
const Game=require('../Game/Game')
test('crear Personaje nombre',()=>{
    const personaje= new Personaje
    expect(personaje.nombre('Juan')).toBe('juan');
})