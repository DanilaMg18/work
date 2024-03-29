import { useSelector } from "react-redux"
import Card3 from "../Cards/productCard3"
import React from "react"
import { useNavigate } from "react-router-dom"

function MainCard3() {
    const card3Data = useSelector((state) => {

        let x = state.products.filter(card => {
          return card.type === 'rioFood'
        })
    
        return x
      })

  let list3 = card3Data.map((card, idx) => {
      return <Card3 key={idx} data3={card}/>
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
            <p className="card2p2">Отдельные виды кормов</p>
        </div>
        <div className="card-wrapper-text">
            <img src="./assets/photos/Card2vectorback.svg"/>
            <p className="goBack" onClick={goBack}>Назад</p>
        </div>
        <div className="card-wrapper-cards2">{list3}</div>
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

export default MainCard3;