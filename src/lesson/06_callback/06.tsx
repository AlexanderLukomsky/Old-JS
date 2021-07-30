import { useState, FocusEvent, MouseEvent } from "react"

export const User = () => {
  let [fz, setFz] = useState('16px')
  const changeSize = (event: MouseEvent<HTMLButtonElement>) => {
    const eventBtnName = event.currentTarget.name
    if (eventBtnName === 'reduce') {
      setFz('10px')
    }
    if (eventBtnName === 'increase') {
      setFz('30px')
    }
  }

  const changeValue = (e: string) => {
    console.log(e);
  }
  const inputBlur = (event: FocusEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    event.currentTarget.value = ''
  }
  return (
    <div>
      <div style={{ fontSize: fz }}>NAME</div>
      <button name='reduce' onClick={changeSize}>reduce size</button>
      <button name='increase' onClick={changeSize}> increase size</button >
      <hr />
      <textarea onChange={(e) => changeValue(e.currentTarget.value)}></textarea>
      <br />
      <input type="text" onBlur={inputBlur} />
    </div >
  )
}