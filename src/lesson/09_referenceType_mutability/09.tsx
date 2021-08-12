export type userType = {
  name: string
  age: number
  address: {
    city: string
  }
}

export const user = {
  name: 'Alexander',
  age: 31
}
export const increaseAge = (user: userType) => {
  user.age++
}