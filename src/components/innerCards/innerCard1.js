import React from 'react'
import { useState } from 'react'


function InnerCardMix(props) {
    let [card,setCard] = useState(props.innerData)

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

    let [counter,setCounter] = useState(0)


    return (
        <div>
            <div className="inner-card">
                <div className="inner-image">
                    <img className='innerimage' src={props.innerData.img}/>
                </div>
                <div className='right-side'>
                    <div className="inner-name"><p className='p-inner-card1'>{props.innerData.title}</p></div>
                    <div className='inner-description'><p className='p-inner-description1'>Дополнительный пюреобразный пигментирующий корм, для птенцов<br/> с красным оперением.<br/> Отлично подходит для увеличения поступления питательных веществ<br/>на особенных этапах жизни зерноядных птиц (при линьке<br/> и размножении), а также в периоды, когда животное испытывает стресс.</p></div>
                    <div className='inner-weightbuttons'>{buttonList}</div>
                    <div className='inner-price'><p className='p-inner-price1'>{props.innerData.price}</p></div>
                    <div className='inner-quantity'><p className='p-quantity'>Количество:</p></div>
                    <div className='counter-wrapper'>
                        <button className='btncounter' onClick={() => setCounter(counter - 1)}><img src='./assets/photos/minus.svg'/></button>
                        <p className='pcounter'>{counter}</p>
                        <button className='btncounter' onClick={() => setCounter(counter + 1)}><img src='./assets/photos/plus.svg'/></button>
                    </div>
                    <div className='inner-buttons'>
                        <button className='buybutton'><p className='buyp'>Купить</p></button>
                        <button className='addbutton'><p className='addp'>Добавить в корзину</p></button>
                    </div>
                </div>
            </div>
            <div className='container-inner'>
                <div className='innerleft'>
                    <div className='pinner'>
                        <p className='container-inner-text'>Виды птиц, для которых подойдет данный товар</p>
                    </div>
                    <div className='vectors-and-imgs'>
                        <img className='imgleft' src='./assets/photos/greenarrowleft.svg'/>
                        <img src='./assets/photos/innerBird1.png'/>
                        <img src='./assets/photos/innerBird2.png'/>
                        <img src='./assets/photos/innerBird3.png'/>
                        <img src='./assets/photos/innerBird4.png'/>
                        <img src='./assets/photos/greenarrowright.svg'/>
                    </div>
                    <div className='birdsnames'>
                        <p className='birdname1'>Голубь</p>
                        <p className='birdname'>Воробей</p>
                        <p className='birdname'>Ласточка</p>
                        <p className='birdname'>Скворец</p>
                    </div>
                </div>
                <div className='innerright'>
                    <div className='pinner'>
                        <p className='container-inner-text'>Зерна из которых состоит данный товар</p>
                    </div>
                    <div className='vectors-and-imgs'>
                        <img className='imgleft' src='./assets/photos/greenarrowleft.svg'/>
                        <img src='./assets/photos/innerSeed1.png'/>
                        <img src='./assets/photos/innerSeed2.png'/>
                        <img src='./assets/photos/innerSeed3.png'/>
                        <img src='./assets/photos/innerSeed4.png'/>
                        <img src='./assets/photos/greenarrowright.svg'/>
                    </div>
                    <div className='seedsnames'>
                        <p className='seedname1'>Пшено</p>
                        <p className='seedname'>Просо</p>
                        <p className='seedname'>Лен</p>
                        <p className='seedname'>Пшеница</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InnerCardMix