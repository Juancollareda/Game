let Contador = (function(){
    var counter = 0;

    function increment() {
        return counter++;
    }

    function decrement() {
        return counter--;
    }

    function reset() {
        console.log("Counter " + counter + " antes de resetear.");
        counter = 0;
    }

    return {
        increment: increment,
        decrement: decrement,
        reset: reset
    }
})();

module.exports=Contador