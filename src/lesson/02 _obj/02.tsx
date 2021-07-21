type cityType = {
  city: string,
  country: string
}
type addressType = {
  street: string
  city: cityType
}
type techType = {
  id: number,
  title: string
}

export type studentType = {
  id: number,
  name: string,
  age: number,
  isActive: boolean,
  address: addressType,
  technologies: Array<techType>
}
export const student: studentType = {
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
///////------
export type CityType = {
  title: string
  houses: Array<HouseType>
  buildings: Array<Buildings>
  citizenNumber: number
}
type HouseType = {
  buildeAt: number
  repaired: boolean
  address: AddressType
}
type AddressType = {
  number?: number
  street: StreetType
}
type StreetType = {
  title: string
}

type Buildings = {
  type: 'Hospital' | 'School' | 'Fire station',
  budget: number
  staffCount: number
  address: AddressType
}

export const changeBudget = (city: CityType, cityTitle: string, money: number) => {
  city.buildings.map(el => el.type === cityTitle ? el.budget += money : null)
}
export const repairHouses = (house: HouseType) => {
  house.repaired = true
}
export const addStaff = (buildings: Buildings, count: number) => {
  buildings.staffCount += count
}