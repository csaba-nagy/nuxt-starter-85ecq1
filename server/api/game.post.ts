import { checkWinner, resetState, state, setWinner } from '../game/state'

export default defineEventHandler(async (event) => {
  const { x, y, reset, value } = await useBody(event)

  if (reset) {
    resetState()

    return { state }
  }

  state.fields[x][y] ||= value

  if (!checkWinner(state.fields, value)) {
    return { state }
  }

  setWinner(value)

  return { state }
})
