import { splitIntoWords, mult, sum } from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
  a = 1;
  b = 2;
  c = 3;
})


test('sum should be currect', () => {
  const result1 = sum(a, b)
  a = 100
  const result2 = sum(a, c)
  expect(result1).toBe(3)
  expect(result2).toBe(103)
})
test('mulitply should be currect', () => {
  const a = 1;
  const b = 2;
  const c = 3;

  const result1 = mult(a, b)
  const result2 = mult(c, b)

  expect(result1).toBe(2)
  expect(result2).toBe(6)
})
test('splitIntoWords should be currect', () => {
  const sentense1 = "Hello my friends!"
  const sentense2 = "JS - best prog lang!"

  const res1 = splitIntoWords(sentense1)
  const res2 = splitIntoWords(sentense2)
  expect(res1[0]).toBe("hello")
  expect(res1[1]).toBe("my")
  expect(res1[2]).toBe("friends")

  expect(res2[0]).toBe("js")
  expect(res2[1]).toBe("best")
  expect(res2[2]).toBe("prog")
  expect(res2[3]).toBe("lang")
})