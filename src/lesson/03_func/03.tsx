import { studentType } from "../02 _obj/02"
export const addSkill = (s: studentType, technologies: string) => {
  s.technologies.push({
    id: new Date().getTime(),
    title: technologies
  })
}

export const changeStatus = (s: studentType, status: boolean) => {
  s.isActive = status
}

export const doesStudentLiveIn = (student: studentType, city: string) => {
  return student.address.city.city === city
}