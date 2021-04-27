function computerPlay(throws) {
    return throws[Math.floor(Math.random()*throws.length)];
}
const throws = ['Rock', 'Paper', 'Scissors'];
console.log(computerPlay(throws));
