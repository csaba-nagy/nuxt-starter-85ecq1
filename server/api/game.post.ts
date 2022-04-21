import { checkWinner, resetFields, state } from '../game/state'

export default defineEventHandler(async (event) => {
  const { x, y, reset, value } = await useBody(event)

  if (reset) {
    resetFields()

    return { state }
  }

  state.fields[x][y] ||= value

  if (!checkWinner(state.fields, value)) {
    return { state }
  }

  state.winner = value

  return { state }
})
