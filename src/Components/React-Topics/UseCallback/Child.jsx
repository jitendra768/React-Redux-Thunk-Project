import { memo } from "react"

const Child = ({learnig}) => {
    console.log("i am child")
  return (
    <div>Child</div>
  )
}

export default memo(Child) 