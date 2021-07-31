import { ManType } from "./07";

export { }

let man: ManType;

beforeEach(() => {
  man = {
    name: 'Alex',
    age: 31,
    lesson: [{ title: '1' }, { title: '2' }],
    address: {
      street: {
        title: 'Selickogo'
      }
    }
  }
})
test('t7', () => {
  const { age, lesson } = man
  const { title } = man.address.street
  expect(age).toBe(31)
  expect(lesson.length).toBe(2)
  expect(title).toBe('Selickogo')
})

test('t7.1', () => {
  const [, l2] = man.lesson
  expect(l2.title).toBe('2')
})