import { state } from '../game/state'

const { floor, random } = Math
const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms))
const randomInteger = (min, max) => floor(random() * (max - min + 1)) + min

export default defineEventHandler(async () => {
  // Simulate network speed.
  await delay(randomInteger(100, 2000))

  return state
})
