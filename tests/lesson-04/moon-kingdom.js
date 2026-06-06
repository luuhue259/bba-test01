// bài 1


function createCharacters() {
    const characters = [
        { name: 'Mario', level: 21, health: 100 },
        { name: 'Peach', level: 20, health: 200 },
        { name: 'Hue', level: 30, health: 400 }

    ]
    const charactersPowerUp = characters.map((char) =>
    ({
        name: char.name.toUpperCase(),
        level: char.level * 2,
        health: char.health * 3
    }));

    const possibleWinners = charactersPowerUp.filter((char) => char.health > 1000);

    console.log(possibleWinners);

}
createCharacters();



// bài 2

function printLeaderboard(players) {
    players.sort(function (a, b) {
        return b.score - a.score;
    });
    for (let i = 0; i < players.length; i++) {
        let medal = '';
        if (i === 0) {
            medal = '🥇';
        } else if (i === 1) {
            medal = '🥈';
        } else if (i === 2) {
            medal = '🥉';
        }
        console.log(`${medal} ${i + 1}. ${players[i].name} - ${players[i].score}`);
    }
}

const players = [
    { name: "Mario", score: 1000 },
    { name: "Peach", score: 850 },
    { name: "Luigi", score: 900 },
    { name: "Yoshi", score: 800 },
    { name: "Phong", score: 500 }
];

printLeaderboard(players);