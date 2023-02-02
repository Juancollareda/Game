const Game=require('../Game/Game')
test('crear jugador',()=>{
    expect(Game.crearjugador(1)).toBe('jugador creado');
})