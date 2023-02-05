import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Card6(props) {
    let [card,setCard] = useState(props.data6);
    let navigate = useNavigate();

    function goToInner() {
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
                    <img className='card1image' src={props.data6.img}/>
                </div>
                <div className="product-name"><p className='pcard1'>{props.data6.title}</p></div>
                <div className='product-description'><p className='pdescription1'>{props.data6.description}</p></div>
                <div className='product-price'><p className='pprice1'>{props.data6.price}</p></div>
                <div className='product-weightbuttons'>{buttonList}</div>
                <div className='product-buttons'>
                    <button className='product-button-more' onClick={goToInner}><p className='pmore'>Подробнее</p></button>
                    <button className='product-button-basket'><img src='./assets/photos/basket.svg'/></button>
                </div>
            </div>
    )
}

export default Card6