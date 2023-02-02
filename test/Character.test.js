const Game=require('../Game/Game.js')
test('crear jugador',()=>{
    game=Game
    expect(game.crearjugador(1)).toBe('jugador creado');
})