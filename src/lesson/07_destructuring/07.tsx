type LessonType = {
  title: string
}
type StreetType = {
  title: string
}
type AddressType = {
  street: StreetType
}
export type ManType = {
  name: string
  age: number
  lesson: Array<LessonType>
  address: AddressType
}
type PropsType = {
  title: string
  man: ManType
}
export const Component: React.FC<PropsType> = ({ title, man }) => {

  // const { title, man: { name }, man: { age } } = props
  // const { man } = props
  return (
    <div>
      <h1>
        {title}
        {/* {name} */}
      </h1>
      <div>
        {/* {age} */}
        {man.lesson}
      </div>
    </div>
  )
}