export const lesson_01 = 'lesson_01'
const sentense = "JS - best prog lang!"
export const splitIntoWords = (sentense: string) => {
  const words = sentense.toLowerCase().split(" ")
  return words.filter(w => w !== "-")
    .map(w => w.replace("!", ''))
}
const result = splitIntoWords(sentense)
export function sum(a: number, b: number) {
  return a + b
}
export function mult(a: number, b: number) {
  return a * b
}