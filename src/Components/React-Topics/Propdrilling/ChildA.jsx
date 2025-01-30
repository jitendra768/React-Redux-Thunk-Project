import ChildB from "./ChildB"

// eslint-disable-next-line react/prop-types
const ChildA = ({user}) => {
  return (
    <div>
        <ChildB user={user}/>
    </div>
  )
}

export default ChildA