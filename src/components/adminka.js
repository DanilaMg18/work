import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useState, useEffect } from "react"

const FirstCardAdminPanel = (props) => {
    return(
        <div className='AdminPanelContainer'>
            <div className="data" >
                <p>Название:{props.card1[0].title}</p>
                <p>Описание:{props.card1[0].price}</p>
            </div>
            <div>
                <button className="AdminPanelButton" onClick={() => {props.editProduct()}}>Edit</button>
            </div>
        </div>
    )
}
export default function Adminka() {
    const cardsData1 = useSelector((state) => state.products.FirstCardData)

    const dispatch = useDispatch()
    let [chosenProduct,setChosenProduct] = useState({title: ''})

    
    // let orderList = cardsData1.map((data,idx) =>  {
    //     return(
    //         <div>
    //             <div className="data" data-id={data.id} key={idx}>
    //                 <p>{cardsData1.title}</p>
    //                 <p>{cardsData1.price}</p>
    //             </div>
    //             <div>
    //                 <button onClick={() => {editProduct()}}>Edit</button>
    //             </div>
    //         </div>
    //     )
    //     })


        function editProduct() {
            setChosenProduct(cardsData1[0])
         }


    useEffect(() => {
        console.log(chosenProduct)
    }, [chosenProduct])

    function changeCardTitle(e) {
        setChosenProduct(prev => {
            return {...prev, title: e.target.value}
        })
    }

    function changeCardPrice(e) {
        setChosenProduct(prev => {
            return {...prev, price: e.target.value}
        })
    }

    function saveChanges() {
        dispatch({type: 'UPDATE_PRODUCT', payload: chosenProduct})
    }



    return(
        <div className="container7">
            <div className="adminPanel">
                <FirstCardAdminPanel card1={cardsData1} editProduct={editProduct}/>
            </div>
            <div className="adminInputs">
                <div className="inputs-btn-admin">
                    <input className="inputAdmin" type='text' value={chosenProduct.title} onChange={(e) => {changeCardTitle(e)}}/>
                    <input type='text' value={chosenProduct.price} onChange={(e) => {changeCardPrice(e)}}/>
                    <button onClick={saveChanges}>Save</button>
                </div>
            </div>
        </div>
    )
}