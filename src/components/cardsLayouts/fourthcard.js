import { useSelector } from "react-redux"
import Card4 from "../cards/cardmix4"
import React from "react"
import { useNavigate } from "react-router-dom"

function MainCard4() {
    const card4Data = useSelector((state) => state.products.FourthCardData)

  let list4 = card4Data.map((card, idx) => {
      return <Card4 key={idx} data4={card}/>
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
            <p className="card2p2">Готовые комплекты</p>
        </div>
        <div className="card-wrapper-text">
            <img src="./assets/photos/Card2vectorback.svg"/>
            <p className="goBack" onClick={goBack}>Назад</p>
        </div>
        <div className="card-wrapper-cards2">{list4}</div>
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

export default MainCard4;