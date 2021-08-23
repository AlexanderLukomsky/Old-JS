import { CompanyType, UserType, UserWithArray, UserWithCompany, UserWithLaptop } from "./10"


const hairdresser = (u: UserType, power: number) => ({ ...u, address: { ...u.address }, hair: u.hair / power, })

test.skip('t10', () => {
  const user: UserType = {
    name: 'Alex',
    hair: 32,
    address: { title: 'Minsk' }
  }
  const newUser = hairdresser(user, 10)
  newUser.address.title = 'Grodno'

  expect(user.hair).toBe(32)
  expect(user.address.title).toBe('Minsk')

  expect(newUser.address.title).toBe('Grodno')
  expect(newUser.hair).toBe(3.2)

})

const upgradeLaptop = (u: UserWithLaptop, laptop: string) => ({ ...u, laptop: { ...u.laptop, title: laptop } })

test.skip('upgrade laptop', () => {
  const user: UserWithLaptop = {
    name: 'Alex',
    hair: 32,
    address: { title: 'Minsk' },
    laptop: {
      title: 'Asus'
    }
  }
  const u = upgradeLaptop(user, 'Mac')
  expect(user).not.toBe(u)
  expect(user.laptop.title).toBe('Asus')
  expect(u.laptop.title).toBe('Mac')
})
const upgradeArr = (u: UserWithArray, arr: string[]) => ({ ...u, whatToBuy: [...u.whatToBuy.concat(arr)] })

test.skip('upgrade array', () => {
  const user: UserWithArray = {
    name: 'Alex',
    age: 31,
    address: { title: 'Minsk', house: 13 },
    laptop: {
      title: 'Asus'
    },
    whatToBuy: ['milk', 'bread', 'book']
  }
  const u = upgradeArr(user, ['phone', 'fruits'])
  expect(user.whatToBuy).not.toBe(u.whatToBuy)
  expect(user.whatToBuy[3]).toBe(undefined)
  expect(user.whatToBuy.length).toBe(3)
  expect(u.whatToBuy[3]).toBe('phone')
  expect(u.whatToBuy[4]).toBe('fruits')
  expect(u.whatToBuy.length).toBe(5)
})
const updateArr = (u: UserWithArray, bookForUpdate: string, book: string) => (
  { ...u, whatToBuy: u.whatToBuy.map(b => b === bookForUpdate ? book : b) }
)

test.skip('update array', () => {
  const user: UserWithArray = {
    name: 'Alex',
    age: 31,
    address: { title: 'Minsk', house: 13 },
    laptop: {
      title: 'Asus'
    },
    whatToBuy: ['milk', 'bread', 'book']
  }
  const u = updateArr(user, 'bread', 'apple')
  expect(user.whatToBuy).not.toBe(u.whatToBuy)
  expect(user.whatToBuy[1]).toBe('bread')
  expect(user.whatToBuy.length).toBe(3)
  expect(u.whatToBuy[1]).toBe('apple')
  expect(u.whatToBuy.length).toBe(3)
})


const updateCompany = (u: UserWithCompany, newCompany: CompanyType) => ({ ...u, company: [...u.company, newCompany] })
const updateCompanyTitle = (u: UserWithCompany, id: number, updateCompanyTitle: string) => (
  { ...u, company: u.company.map(c => c.id === id ? { ...c, title: updateCompanyTitle } : c) }
)
test('company', () => {
  const user: UserWithCompany = {
    name: 'Alex',
    age: 31,
    address: { title: 'Minsk', house: 13 },
    laptop: {
      title: 'Asus'
    },
    whatToBuy: ['milk', 'bread', 'book'],
    company: [
      { title: 'factory', id: 1 },
      { title: 'shop', id: 2 },
      { title: 'workshop', id: 3 },
      { title: 'any', id: 4 },
    ]

  }
  const u = updateCompany(user, { title: 'Google', id: 5 })
  const uCompanyTitle = updateCompanyTitle(user, 2, 'crazy shoop')
  expect(user.company).not.toBe(u.company)
  expect(user.company.length).toBe(4)
  expect(u.company.length).toBe(5)
  expect(u.company[4].title).toBe('Google')
  expect(user.company[1].title).toBe('shop')
  expect(uCompanyTitle.company[1].title).toBe('crazy shoop')
})