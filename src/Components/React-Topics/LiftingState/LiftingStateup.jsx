import React from 'react'
import ChildComponents from './ChildComponents'

const LiftingStateup = () => {

  function getData(data){
    console.log("Data is being lifted up", data);
  }
  return (
    <div>
      <ChildComponents getData={getData}/>
    </div>
  )
}

export default LiftingStateup