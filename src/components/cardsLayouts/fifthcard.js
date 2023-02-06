import { data5 } from "../../data"
import Card5 from "../cards/cardmix5"
import React from "react"
import { useNavigate } from "react-router-dom"

function MainCard5() {
  let list5 = data5.map((card, idx) => {
      return <Card5 key={idx} data5={card}/>
  })

  let navigate = useNavigate();

  function goBack() {
    navigate('/')
  }

  return(
    <div className='card-wrapper2'>
        <div className="where-are-you">
            <p className="card2p">Каталог</p>
            <img src="./assets/photos/circle.svg"/>
            <p className="card2p2">Аксессуары и другое</p>
        </div>
        <div className="card-wrapper-text">
            <img src="./assets/photos/Card2vectorback.svg"/>
            <p className="goBack" onClick={goBack}>Назад</p>
        </div>
        <div className="card-wrapper-cards2">{list5}</div>
        <div className="pages">
            <img src="./assets/photos/leftarrow.svg"/>
            <p className="pages1">1</p>
            <p className="pages2">2</p>
            <p className="pages3">3</p>
            <img src="./assets/photos/rightarrow.svg"/>
        </div>
    </div>
)
}

export default MainCard5;