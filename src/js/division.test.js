import { expect, test } from 'vitest'
import { division } from './division.js'

test('division -10 by 2 to equal -5', () => {
    expect(division(-10, 2)).toBe(-5)
})
test('division 1.5 by 0.5 to equal 3', () => {
    expect(division(1.5, 0.5)).toBe(3)
})
test('division -10 by 2 to equal -5', () => {
    expect(division(-10, 2)).toBe(-5)
})
