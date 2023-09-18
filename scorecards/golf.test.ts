import { addScore, calculatePlayerScore, initialScorecard } from "./golf"

describe('initialScorecard', () => {
  it('trows an error when given 0 number of players', () => {
    expect(() => initialScorecard(0)).toThrow('invalid number of players')
  })

  it('creates and returns an array of 18 arrays with hole number at index 0 of each row', () => {
    const actual = initialScorecard(1)
    const expected = [
      [1, 0],[2, 0],[3, 0],
      [4, 0],[5, 0],[6, 0],
      [7, 0],[8, 0],[9, 0],
      [10, 0],[11, 0],[12, 0],
      [13, 0],[14, 0],[15, 0],
      [16, 0],[17, 0],[18, 0]
    ]

    expect(expected).toEqual(actual)
  })
})

describe('addScore', () => {
  it('throws an error if hole is 0', () => {
    const scorecard = initialScorecard(2)

    expect(() => addScore('2', 0, 1, scorecard)).toThrow()
  })
  
  it('throws an error if player index is 0', () => {
    const scorecard = initialScorecard(2)

    expect(() => addScore('2', 1, 0, scorecard)).toThrow()
  })

  it('throws error if hole number is greater than 18', () => {
    const scorecard = initialScorecard(1)

    expect(() => addScore('7', 19, 3, scorecard)).toThrow()
  })

  it("thows error player number i greater than what's in the scorecard", () => {
    const scorecard = initialScorecard(1)

    expect(() => addScore('3', 2, 2, scorecard)).toThrow()
  })

  it('updates the correct row and column in scorecard', () => {
    const scorecard = initialScorecard(3)

    let expected = [
      [1, 0, 4, 0],[2, 0, 0, 0],[3, 0, 0, 0],
      [4, 0, 0, 0],[5, 0, 0, 0],[6, 0, 0, 0],
      [7, 0, 0, 0],[8, 0, 0, 0],[9, 0, 0, 0],
      [10, 0, 0, 0],[11, 0, 0, 0],[12, 0, 0, 0],
      [13, 0, 0, 0],[14, 0, 0, 0],[15, 0, 0, 0],
      [16, 0, 0, 0],[17, 0, 0, 0],[18, 0, 0, 0]
    ]
    let actual = addScore('4', 1, 2, scorecard)

    expect(expected).toEqual(actual)

    expected = [
      [1, 0, 4, 0],[2, 0, 0, 0],[3, 0, 0, 0],
      [4, 0, 0, 0],[5, 0, 0, 0],[6, 0, 0, 0],
      [7, 0, 0, 0],[8, 0, 7, 0],[9, 0, 0, 0],
      [10, 0, 0, 0],[11, 0, 0, 0],[12, 0, 0, 0],
      [13, 0, 0, 0],[14, 0, 0, 0],[15, 0, 0, 0],
      [16, 0, 0, 0],[17, 0, 0, 0],[18, 0, 0, 0]
    ]
    actual = addScore('7', 8, 2, scorecard)

    expect(expected).toEqual(actual)

    expected = [
      [1, 0, 4, 0],[2, 0, 0, 0],[3, 0, 0, 0],
      [4, 0, 0, 0],[5, 0, 0, 0],[6, 0, 0, 0],
      [7, 0, 0, 0],[8, 0, 7, 0],[9, 0, 0, 0],
      [10, 0, 0, 0],[11, 0, 0, 0],[12, 0, 0, 0],
      [13, 0, 0, 0],[14, 0, 0, 0],[15, 0, 0, 0],
      [16, 0, 0, 0],[17, 0, 0, 0],[18, 0, 0, 7]
    ]
    actual = addScore('7', 18, 3, scorecard)

    expect(expected).toEqual(actual)
  })
})

describe('calculatePlayerScore', () => {
  it('throws if player number is 0', () => {
    const scorecard = initialScorecard(1)

    expect(() => calculatePlayerScore(0, scorecard)).toThrow()
  })

  it('throws if player number does not exist in scorecard', () => {
    const scorecard = initialScorecard(1)

    expect(() => calculatePlayerScore(2, scorecard)).toThrow()
  })

  it('sums up the score for all holes', () => {
    const scorecard = initialScorecard(1)
    addScore('3', 1, 1, scorecard)
    addScore('3', 2, 1, scorecard)
    addScore('3', 3, 1, scorecard)
    addScore('3', 4, 1, scorecard)
    addScore('3', 5, 1, scorecard)
    addScore('3', 6, 1, scorecard)
    addScore('3', 7, 1, scorecard)
    addScore('3', 8, 1, scorecard)
    addScore('3', 9, 1, scorecard)
    addScore('3', 10, 1, scorecard)
    addScore('3', 11, 1, scorecard)
    addScore('3', 12, 1, scorecard)
    addScore('3', 13, 1, scorecard)
    addScore('3', 14, 1, scorecard)
    addScore('3', 15, 1, scorecard)
    addScore('3', 16, 1, scorecard)
    addScore('3', 17, 1, scorecard)
    addScore('3', 18, 1, scorecard)

    expect(calculatePlayerScore(1, scorecard)).toEqual(54)
  })
})

