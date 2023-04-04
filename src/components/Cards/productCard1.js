import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'


function Card(props) {
    let [card,setCard] = useState(props.data)
    const cart = useSelector((state) => state.orders.Allorders)
    const [newOrder, setNewOrder] = useState(cart)
    const dispatch = useDispatch()
    const newID = cart.length + 1

  function Memory() {
      setNewOrder(() => {
        dispatch({type: 'ADD_ORDER', payload: {orderName: 'PADOVAN OVOMIX GOLD ROSSO', id: newID, price: '1000 руб', img: './assets/photos/CardData1.png'}})
      })
    }


  useEffect(() => {
    console.log(newOrder)
  }, [newOrder])

    let navigate = useNavigate()

    function goToInnerCard() {
        navigate('/innerCard')
      }

    let buttonList = card.possibleWeights.map((weight,idx) => {
        return (
            <button onClick={() => {weightSelector(idx)}} key={idx} className={'weight-selection-btn' + (weight.selected? ' selected' : '')}>{weight.weight}</button>
        )
    })

    function weightSelector(idx) {
        setCard(prev=> {
            let newCard = {...prev}
            if (card.possibleWeights[idx].selected) {
                newCard.possibleWeights[idx].selected = false
                return newCard
            }
            newCard.possibleWeights.forEach(weight => weight.selected = false)
            newCard.possibleWeights[idx].selected = true;
            return newCard
        })
    }


    return (
            <div className="product-card">
                <div className="product-image">
                    <img className='card1image' src={props.data.img}/>
                </div>
                <div className="product-name"><p className='pcard1'>{props.data.title}</p></div>
                <div className='product-description'><p className='pdescription1'>{props.data.description}</p></div>
                <div className='product-price'><p className='pprice1'>{props.data.price}</p></div>
                <div className='product-weightbuttons'>{buttonList}</div>
                <div className='product-buttons'>
                    <button className='product-button-more' onClick={goToInnerCard}><p className='pmore'>Подробнее</p></button>
                    <button className='product-button-basket' onClick={Memory}><img src='./assets/photos/basket.svg'/></button>
                </div>
            </div>
    )
}

export default Card