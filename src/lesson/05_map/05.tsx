export type manType = {
  name: string,
  age: number
}
export const people: Array<manType> = [
  { name: 'Ivanov Ivan', age: 30 },
  { name: 'Semenov Semen', age: 35 },
  { name: 'Petrov Petya', age: 40 },
]

const incubator = (man: manType) => ({
  fname: man.name.split(' ')[0],
  lname: man.name.split(' ')[1],
  stack: ['HTML&CSS', 'SCSS', 'JS', 'TS', 'React'],
})


const dev = people.map(incubator)
const dev1 = people.map(man => ({
  fname: man.name.split(' ')[0],
  lname: man.name.split(' ')[1],
  stack: ['HTML&CSS', 'SCSS', 'JS', 'TS', 'React'],
}))
