export { rps, rpsls }

let result = {
    rock: {
        rock: 'tie',
        paper: 'win',
        scissors: 'lose',
        lizard: 'lose',
        spock: 'win'
    },
    paper: {
        rock: 'lose',
        paper: 'tie',
        scissors: 'win',
        lizard: 'win',
        spock: 'lose'
    },
    scissors: {
        rock: 'win',
        paper: 'lose',
        scissors: 'tie',
        lizard: 'lose',
        spock: 'win'
    },
    lizard: {
        rock: 'win',
        paper: 'lose',
        scissors: 'win',
        lizard: 'tie',
        spock: 'lose'
    },
    spock: {
        rock: 'lose',
        paper: 'win',
        scissors: 'lose',
        lizard: 'win',
        spock: 'tie'
    }
}

function rps(play) {
    play = play.toLowerCase()

    let hands = ['rock', 'paper', 'scissors']
    let rand_play = hands[Math.floor(Math.random() * 3)]

    if(!play){return {player : rand_play}}

    if (!(hands.includes(play))) {
        console.error(`${play} is not an option`);
        throw new RangeError();
    }

    return {player: play, opponent: rand_play, result: result[rand_play][play]}
}