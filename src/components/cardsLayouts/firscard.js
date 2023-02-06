import { data } from "../../data"
import Card from "../cards/cardmix"
import React from "react"

function MainCard1() {
  let list = data.map((card, idx) => {
      return <Card key={idx} data={card}/>
  })

  return(
    <div className='card-wrapper'>
      <div className="card-wrapper-text">
        <p className='wrapper-text1'>Готовые миксы</p>
        <p className='wrapper-text2'>Ещё</p>
        <img src="./assets/photos/green arrow.svg"/>
      </div>
      <div className="card-wrapper-cards">{list}</div>
    </div>
)
}

export default MainCard1;