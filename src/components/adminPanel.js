import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useState, useEffect } from "react"

export default function Adminka() {
    const dispatch = useDispatch()


    const cards = useSelector((state) => state.products)
    let [chosenProduct,setChosenProduct] = useState({title: '', price: '', id: null})

    
    let AdminPanelCardList = cards.map((data,idx) =>  {
        return(
            <div className="NewAdminCard" key={idx}>
                <div className="AdminCardConteiner">
                    <div className="AdminCard" data-id={data.id} key={idx}>
                        <img className="AdminCardImg" src={data.img}/>
                        <p>{data.title}</p>
                        <p>{data.price}</p>
                    </div>
                    <div>
                        <button className="AdminCardButton" role="button" data-id={data.id} data-idx={idx} onClick={(e) => {editProduct(e)}}>Edit</button>
                    </div>
                </div>
            </div>
        )
        })


        function editProduct(e) {
            let idx = e.target.dataset.idx
            let uid = e.target.dataset.id

            setChosenProduct( {...cards[idx], id: uid} )
         }


    useEffect(() => {
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
                {/* <FirstCardAdminPanel card1={cardsData1} editProduct={editProduct}/> */}
                {AdminPanelCardList}
            </div>
            <div className="adminInputs">
                <div className="inputs-btn-admin">
                    <img className="AdminSelectLogo" src="./assets/photos/logo.png"/>
                    <input className="inputAdmin1" type='text' value={chosenProduct.title} onChange={(e) => {changeCardTitle(e)}}/>
                    <input className="inputAdmin2"type='text' value={chosenProduct.price} onChange={(e) => {changeCardPrice(e)}}/>
                    <button className="AdminSelectButton" onClick={saveChanges}>Save</button>
                </div>
            </div>
        </div>
    )
}