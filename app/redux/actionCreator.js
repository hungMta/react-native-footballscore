export function passCompetition(competition) {
  console.log('passCompetition = ',competition);
  return { type: "COMPETITION", competition: competition };
}
