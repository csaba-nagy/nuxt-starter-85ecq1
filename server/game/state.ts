export const state = {
  fields: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  winner: null,
}

export const resetFields = () => {
  state.fields = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]

  state.winner = null
}

const equals = (items, sign, length = 3) =>
  items.filter((i) => i === sign).length === length

export const checkWinner = (board, player, length = 3) => {
  let diagonal = {
    l: [],
    r: [],
  }

  const hasWinner = board.some((row, y) => {
    diagonal.l.push(row[y])
    diagonal.r.push(row[length - 1 - y])

    // Check horizontally.
    if (equals(row, player, length)) {
      return true
    }

    const column = row.map((_, x) => board[x][y])

    // Check vertically.
    if (equals(column, player, length)) {
      return true
    }

    return false
  })

  // Check diagonally.
  return (
    hasWinner ||
    Object.values(diagonal)
      .map((i) => i.filter((i) => i !== player))
      .some((i) => i.length === 0)
  )
}
