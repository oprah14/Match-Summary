const matchSummary = (homeTeam, awayTeam) => {
  const summary = [];
  let homeTotal = 0;
  let awayTotal = 0;

  for (let i = 1; i <= 4; i++) {
    const homeScore = Math.floor(Math.random() * (26 - 12 + 1)) + 12;
    const awayScore = Math.floor(Math.random() * (26 - 12 + 1)) + 12;

    homeTotal += homeScore;
    awayTotal += awayScore;

    summary.push(
      `${i} Period: ${homeTeam} ${homeScore} - ${awayTeam} ${awayScore}`
    );
  }

  
  let result = '';
  if (homeTotal > awayTotal) {
    result = `Match Result: ${homeTeam} ${homeTotal} - ${awayTotal} won`;
  } else if (homeTotal < awayTotal) {
    result = `Match Result: ${homeTeam} ${homeTotal} - ${awayTotal} lost`;
  } else {
    result = `Match ended ${homeTotal} - ${awayTotal} and went to overtime`;
  }

  summary.push(result);

  return summary;
};


module.exports = matchSummary;
