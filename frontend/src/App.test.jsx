// import { expect, it } from 'vitest'

const func = () => {
  return true
}

it('should return true', () => {
  const result = func()

  expect(result).toBe(true)
})