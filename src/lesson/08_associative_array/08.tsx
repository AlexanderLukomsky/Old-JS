export const usersArr = ['Alex', 'Dimych', 'Vova', 'Nikita']
export const usersObj = {
  '0': 'Alex',
  '1': 'Dimych',
  '2': 'Vova',
  '3': 'Nikita'
}
export type UsersType = {
  [key: string]: UsersValuesType
}
export type UsersValuesType = {
  id: number
  name: string
}
export const users: UsersType = {
  '0': { id: 0, name: 'Alex' },
  '145': { id: 145, name: 'Dimych' },
  '22': { id: 22, name: 'Vova' },
  '378': { id: 378, name: 'Nikita' }
}
let newUser = { id: 22021, name: 'newUser' }
users[newUser.id] = newUser
delete users['0']
console.log(users);
console.log(users[145]);
export const usersArrDuplicate = [{ '0': { id: 0, name: 'Alex' } }, { '145': { id: 145, name: 'Dimych' } }, { '22': { id: 22, name: 'Vova' } }, { '378': { id: 378, name: 'Nikita' } }]
//*** */
// console.log(Object.keys(usersObj));
// console.log(Object.values(usersObj));