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
  
  // 1. Tạo ra 1 mảng cầu thủ cho mỗi đội
  const players1 = [...game.players1];
  const players2 = [...game.players2];
  
  // 2. Phần tử đầu tiên trong mảng là Thủ môn, các phần tử còn lại sẽ là các cầu thủ ở các vị trí khác
  const [gk, ...fieldPlayers] = players1;
  
  // 3. Tạo 1 mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ trên sân
  const allPlayers = [...players1, ...players2];
  
  // 4. Trong trận đấu, Bayern Munich (team 1) sử dụng 3 quyền thay người
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  
  // 5. Dựa vào object game.odds, tạo một biến thể hiện tỉ lệ kết quả trận đấu
  const { team1, draw, team2 } = game.odds;
  
  // 6. Viết 1 hàm ('printGoals') nhận vào 1 số tên cầu thủ đã ghi bàn và in ra console tên những cầu thủ đó cùng với số cầu thủ đã ghi bàn
  const printGoals = function (...players) {
    console.log(`${players.length} goals were scored`);
    for (let i = 0; i < players.length; i++) {
      console.log(`Goal ${i + 1}: ${players[i]}`);
    }
  };
  
  // Chạy hàm với dữ liệu test
  printGoals(...game.scored);
  
  // 7. Đội có tỷ lệ chấp thấp hơn sẽ dành chiến thắng
  const team = game.odds.team1 < game.odds.team2 ? game.team1 : game.team2;
  console.log(team);