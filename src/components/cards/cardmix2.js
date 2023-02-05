import React from 'react'


function Card2(props) {
    return (
            <div className="product-card">
                <div className="product-image">
                    <img className='card1image' src={props.data2.img}/>
                </div>
                <div className="product-name"><p className='pcard1'>{props.data2.title}</p></div>
                <div className='product-description'><p className='pdescription1'>{props.data2.description}</p></div>
                <div className='product-price'><p className='pprice1'>{props.data2.price}</p></div>
                <div className='product-buttons'>
                    <button className='product-button-more'><p className='pmore'>Подробнее</p></button>
                </div>
            </div>
    )
}

export default Card2
