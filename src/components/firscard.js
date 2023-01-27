import data from "../data"
import Card from "./cards/cardmix"
import React from "react"

function MainCard1() {
  let list = data.map(card => {
      return <Card data={card}/>
  })

  return(
    <div className='card-wrapper'>
      {list}
    </div>
)
}

export default MainCard1;