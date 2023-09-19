type TScorecard = number[][]

export const initialScorecard = (numPlayers: number): TScorecard => {
  if (numPlayers === 0) throw('invalid number of players')
  const scorecard = Array.from(Array(18).keys()).map(row => {
    return Array.from(Array(numPlayers+1).keys()).map(col => {
      if (col === 0) return row+1
      return 0
    })
  })

  return scorecard
}

export const addScore = (score: string, hole: number, player: number, scorecard: TScorecard): TScorecard => {
  if (hole === 0) throw('invalid hole number')
  if (player === 0 || scorecard[0].length < player + 1) throw('invalid player number')

  scorecard[hole-1][player] = +score
  
  return scorecard
}

export const calculatePlayerScore = (player: number, scorecard: TScorecard): number => {
  if (player === 0 || scorecard[0].length < player + 1) throw('invalid player number')

  const score = scorecard.reduce((acc, curr) => acc += curr[player], 0)
  
  return score
}
