import Card from "../cards/cardmix"
import React from "react"
import { useSelector } from "react-redux"

function MainCard1() {
  const card1Data = useSelector((state) => state.products.FirstCardData)
  
  let list = card1Data.map((card, idx) => {
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