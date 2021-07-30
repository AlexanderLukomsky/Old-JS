import { manType } from "./05";
let people: Array<manType> = []
beforeEach(() => {
  people = [
    { name: 'Ivanov Ivan', age: 30 },
    { name: 'Semenov Semen', age: 35 },
    { name: 'Petrov Petya', age: 40 },
  ]
})
test('should get array of welcome messages', () => {
  const messages = people.map(man => `Hello ${man.name.split(' ')[1]}.`)
  expect(messages[0]).toBe('Hello Ivan.')
  expect(messages[1]).toBe('Hello Semen.')
  expect(messages[2]).toBe('Hello Petya.')
})