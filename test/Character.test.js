const Game=require('../Game/Game')
test('crear jugador',()=>{
    let game= new Game()
    expect(game.crearjugador(1)).toBe('jugador creado');
})
test('crear jugador',()=>{
    createCanvas(300, 300);
})