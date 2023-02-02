const Game=require('../Game/Game')
test('crear jugador',()=>{
    const game=new Game
    expect(game.crearjugador(1)).toBe('jugador creado');
})