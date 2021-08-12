import { increaseAge, userType } from "./09"

test.skip('reference type test', () => {
  const user = {
    name: 'Alexander',
    age: 31,
    address: {
      city: 'Minsk'
    }
  }
  increaseAge(user)
  expect(user['age']).toBe(32)
  const newUser = user
  newUser.age = 99
  expect(newUser['age']).toBe(99)
})

test.skip('array reference test', () => {
  const users = [{ name: 'Alexander', age: 31 }, { name: 'Oleg', age: 20 }]
  const newUsers = users
  newUsers.push({ name: 'A1', age: 1 })
  expect(users[2].name).toBe('A1')
  expect(newUsers[2].name).toBe('A1')
  expect(newUsers).toEqual(users)
})

test.skip('value test', () => {
  let usersCount = 1
  let newUserCount = usersCount
  newUserCount = 2
  expect(usersCount).toBe(1)
  expect(newUserCount).toBe(2)
})

test.skip('reference obj test', () => {
  const address = {
    title: 'Minsk'
  }
  const user = {
    name: 'Alexander',
    age: 31,
    address: address
  }
  const user2 = {
    name: 'Oleg',
    age: 31,
    address: address
  }
  address.title = 'Minsk-City'
  expect(user['address']['title']).toBe('Minsk-City')
  expect(user2['address']['title']).toBe('Minsk-City')
})

test.skip('reference array test', () => {
  const address = {
    title: 'Minsk'
  }
  const user = {
    name: 'Alexander',
    age: 31,
    address: address
  }
  const user2 = {
    name: 'Oleg',
    age: 31,
    address: address
  }
  const users = [user, user2, { name: 'Dima', age: 32, address: address }]
  const newUsers = [user, user2]
  users[2].address.title = 'Minsk-City'
  newUsers[1].name = 'new Oleg'
  expect(user2.name).toBe('new Oleg')
  expect(user['address']['title']).toBe('Minsk-City')
  expect(user2['address']['title']).toBe('Minsk-City')
})

test('sort', () => {
  const arr = ['c', 'a', 'd', 'e', 'b']
  const newArr = [...arr].sort()
  expect(newArr).toEqual(['a', 'b', 'c', 'd', 'e'])
  expect(arr).toEqual(['c', 'a', 'd', 'e', 'b'])
})