import { describe, expect, test } from 'vitest'
import { sum } from './sum.js'
import { generarNumeroAleatorio } from './sum.js'

describe('test de sumas', () => {


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('sumar 5 + 10 no es 10 ', () => {
  expect(sum(5, 10)).not.toBe(10)
})

test('adds -1 + 1 to equal 0', () => {
  expect(sum(-1, 1)).toBe(0)
})

test('Math ramdom return a number between 0 and 1', () => {
  expect(generarNumeroAleatorio()).toBeGreaterThanOrEqual(0)
})
})