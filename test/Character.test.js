const Player=require('../Game/Player')
const Game=require('../Game/Game')
test('crear jugador',()=>{
    let game= new Game()
    expect(game.crearjugador(1)).toBe('jugador creado');
})
test('Mapa',()=>{

    let game= new Game()

    expect(game.nivel()).toStrictEqual([[],[],[]],
                                       [[],[],[]],
                                       [[],[],[]]);

    
})
test('move player',()=>{

    let player= new Player
    expect(game.nivel()).toStrictEqual() 


})