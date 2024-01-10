// Giả sử chúng ta có dữ liệu từ API như sau
const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players1: ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
    players2: ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
    odds: {
      team1: 1.33,
      draw: 3.25,
      team2: 6.5,
    },
    scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich'],
  };
  
  // 1. Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi
  for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
  }
  
  // 2. Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu và in ra console
  let average = 0;
  for (const odd of Object.values(game.odds)) {
    average += odd;
  }
  average /= Object.values(game.odds).length;
  console.log(`Average odds: ${average}`);
  
  // 3. Print the 3 odds to the console, but in a nice formatted way
  for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'draw' ? 'draw' : `winning of ${game[team]}`;
    console.log(`Odds of ${teamStr}: ${odd}`);
  }
  
  // Thêm: Tạo ra 1 đối tượng là 'scorers', đối tượng này gồm các thuộc tính với key là tên cầu thủ đã ghi bàn, value là số bàn thắng đã ghi.
  const scorers = {};
  for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  }
  console.log(scorers);