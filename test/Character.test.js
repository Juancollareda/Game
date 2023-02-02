const Game=require('../Game/Game')
test('crear jugador',()=>{
    let game=Game
    expect(game.crearjugador(1)).toBe('jugador creado');
})