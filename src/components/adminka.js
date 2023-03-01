import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useState, useEffect } from "react"

export default function Adminka() {
    const kartochka1 = useSelector((state) => state.products.FirstCardData[0])
    const dispatch = useDispatch()

    const selectedProduct = useSelector((state) => state.products.selectedProduct)
    let [chosenProduct,setChosenProduct] = useState(selectedProduct)

    useEffect(() => {
        console.log(1, chosenProduct)
    }, [chosenProduct])

    function changeTelNumber(e) {
        setChosenProduct(prev => {
            return {...prev, title: e.target.value}
        })
    }

    function changePassword(e) {
        setChosenProduct(prev => {
            return {...prev, price: e.target.value}
        })
    }

    function saveChanges() {
        dispatch({type: 'UPDATE_PRODUCT', payload: editProduct})
    }





    const AccountList = (props) => {
        return(
            <div>
                <div className="data">
                    <p>{props.card1.title}</p>
                    <p>{props.card1.price}</p>
                </div>
                <div>
                    <button onClick={() => {editProduct(props.card1)}}>Edit</button>
                </div>
            </div>
        )
    }

    function editProduct(card1) {
        dispatch({type: 'EDIT_PRODUCT', payload: card1})
    }

    return(
        <div className="container7">
            <div className="adminPanel">
                <AccountList card1={kartochka1}/>
            </div>
            <div className="adminInputs">
                <div className="inputs-btn-admin">
                    <input className="inputAdmin" type='text' value={selectedProduct.title} onChange={(e) => {changeTelNumber(e)}}/>
                    <input type='text' value={selectedProduct.price} onChange={(e) => {changePassword(e)}}/>
                    <button onClick={saveChanges}>Save</button>
                </div>
            </div>
        </div>
    )
}