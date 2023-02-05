import { innerData } from "../../innerData"
import InnerCardMix from "../innerCards/innerCard1"
import React from "react"
import { useNavigate } from "react-router-dom"

function InnerCard() {
  let innerList = innerData.map(card => {
      return <InnerCardMix innerData={card}/>
  })

  let navigate = useNavigate();

  function goBack() {
    navigate('/')
  }

  return(
    <div className='card-wrapper-inner'>
        <div className="where-are-you">
            <p className="card2p">Каталог</p>
            <img src="./assets/photos/circle.svg"/>
            <p className="card2p2">Кормушки</p>
            <img src="./assets/photos/circle.svg"/>
            <p className="card2p2">PADOVAN OVOMIX GOLD ROSSO</p>
        </div>
        <div className="card-wrapper-text">
            <img src="./assets/photos/Card2vectorback.svg"/>
            <p className="goBack" onClick={goBack}>Назад</p>
        </div>
        <div className="card-wrapper-inner-cards">{innerList}</div>
    </div>
)
}

export default InnerCard;