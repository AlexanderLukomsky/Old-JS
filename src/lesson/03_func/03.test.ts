import { addSkill, changeStatus, doesStudentLiveIn } from './03';
import { studentType } from "../02 _obj/02"
let student: studentType
beforeEach(() => {
  student = {
    id: 1,
    name: 'Dimych',
    age: 32,
    isActive: false,
    address: {
      street: 'Surganova 2',
      city: {
        city: 'Minsk',
        country: 'Belarus'
      }
    },
    technologies: [
      {
        id: 1,
        title: 'HTML'
      },
      {
        id: 2,
        title: 'CSS'
      },
      {
        id: 3,
        title: 'React'
      }
    ]
  }
})

test('new skill should be added for student', () => {
  expect(student.technologies.length).toBe(3)

  addSkill(student, 'JS');

  expect(student.technologies.length).toBe(4)
  expect(student.technologies[3].title).toBe('JS')
})
test('student should be active', () => {
  expect(student.isActive).toBe(false)

  changeStatus(student, true);

  expect(student.isActive).toBe(true)

})

test('does student live in the city', () => {
  let res = doesStudentLiveIn(student, 'Minsk')
  let res2 = doesStudentLiveIn(student, 'Grodno')
  expect(res).toBe(true)
  expect(res2).toBe(false)
})