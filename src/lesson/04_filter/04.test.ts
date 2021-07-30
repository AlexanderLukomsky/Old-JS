import { ages } from './04'
test('must be over or equal 80 years old', () => {

  const oldAges = ages.filter(age => age >= 80)
  expect(oldAges.length).toBe(3)
  expect(oldAges[0]).toBe(88)
  expect(oldAges[1]).toBe(80)
  expect(oldAges[2]).toBe(93)
})
test('courses should be cheaper than 200', () => {
  const courses = [{ title: 'HTML&CSS', price: 155 }, { title: 'JS', price: 199 }, { title: 'React', price: 300 }]
  type coursesType = {
    title: string
    price: number
  }
  const cheapPredicate = (courses: coursesType) => courses.price < 200
  const cheapCourses = courses.filter(cheapPredicate)

  expect(cheapCourses.length).toBe(2)
  expect(cheapCourses[0].title).toBe('HTML&CSS')
  expect(cheapCourses[0].price).toBe(155)
  expect(cheapCourses[1].title).toBe('JS')
  expect(cheapCourses[1].price).toBe(199)
})

test('get completed tasks', () => {
  const tasks = [
    { id: 0, title: 't1', isDone: true },
    { id: 1, title: 't2', isDone: false },
    { id: 2, title: 't3', isDone: true }
  ]
  const completedTasks = tasks.filter(t => t.isDone)
  const unCompletedTasks = tasks.filter(t => !t.isDone)

  expect(completedTasks[0].id).toBe(0)
  expect(completedTasks[1].id).toBe(2)
  expect(unCompletedTasks[0].id).toBe(1)
})