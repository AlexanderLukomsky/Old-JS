export const ages = [13, 22, 15, 88, 42, 32, 33, 80, 93]
const oldAges = ages.filter(age => age >= 80)


const courses = [{ title: 'HTML&CSS', price: 155 }, { title: 'JS', price: 205 }, { title: 'React', price: 300 }]
type coursesType = {
  title: string
  price: number
}
const cheapPredicate = (courses: coursesType) => courses.price < 160
const cheapCourses = courses.filter(cheapPredicate)