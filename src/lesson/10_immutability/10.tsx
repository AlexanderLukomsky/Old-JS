export type UserType = {
  name: string
  hair: number
  address: { title: string }
}
export type UserWithLaptop = UserType & {
  laptop: LaptopType
}
type LaptopType = {
  title: string
}
export type UserWithArray = {
  name: string
  age: number
  address: { title: string, house: number }
  laptop: LaptopType
  whatToBuy: string[]
}
export type CompanyType = {
  title: string
  id: number
}
export type UserWithCompany = {
  name: string
  age: number
  address: { title: string, house: number }
  laptop: LaptopType
  whatToBuy: string[]
  company: CompanyType[]
}