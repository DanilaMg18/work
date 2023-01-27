import React from 'react'

function Card(props) {
    return (
        <div className="product-card">
            <div className="product-image">
                <img className='card1image' src={props.data.img}/>
            </div>
            <div className="product-name"><p className='pcard1'>{props.data.title}</p></div>
            <div className='product-description'><p className='pdescription1'>{props.data.description}</p></div>
            <div className='product-price'><p className='pprice1'>{props.data.price}</p></div>
            <div className='product-weightbuttons'>
                <button className='btn1'>200 г</button>
                <button className='btn2'>400 г</button>
                <button className='btn3'>800 г</button>
                <button className='btn4'>1 кг</button>
            </div>
        </div>
    )
}

export default Card