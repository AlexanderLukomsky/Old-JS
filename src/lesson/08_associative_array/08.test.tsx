import { UsersType, UsersValuesType } from "./08"

let users: UsersType
let newUser: UsersValuesType

beforeEach(() => {
  users = {
    '0': { id: 0, name: 'Alex' },
    '145': { id: 145, name: 'Dimych' },
    '22': { id: 22, name: 'Vova' },
    '378': { id: 378, name: 'Nikita' }
  }
  newUser = { id: 22021, name: 'newUser' }
  users[newUser.id] = newUser
  delete users['0']
})
test('t8', () => {
  expect(users[0]).toBe(undefined)
  expect(users[145].name).toBe('Dimych')
  expect(users[22].name).toBe('Vova')
  expect(users[378].name).toBe('Nikita')
  expect(users[22021].name).toBe('newUser')
})