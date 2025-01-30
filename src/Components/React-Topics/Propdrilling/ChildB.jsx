import ChildC from "./ChildC"

// eslint-disable-next-line react/prop-types
const ChildB = ({user}) => {
  return (
    <div>
        <ChildC user={user}/>
    </div>
  )
}

export default ChildB