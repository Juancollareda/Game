const Game=require('../Game/Game.js')
test('crear jugador',()=>{
    const game=new Game
    expect(game.crearjugador(1)).toBe('jugador creado');
})