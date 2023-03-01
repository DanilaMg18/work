import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteOrder } from "../store/cartReducer"


export default function Cart() {
    const cart = useSelector((state) => state.orders.Allorders)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function removeOrder(o) {
        dispatch(deleteOrder(o.id))
           
    }


    let orderList = cart.map((order,idx) =>  {
        return(
        <div className="orders" data-id={order.id} key={idx}>
            <div className="order-left-side">
                <img className="orderImg" src={order.img}/>
            </div>
            <div className="order-right-side">
                <div className="ps">{order.orderName}</div>
                <div className="orderPrice">
                    <p className="pPrice1">Итого:</p>
                    <p className="pPrice">{order.price}</p>
                </div>
            </div>
            <div className="order-block-btn">
                <button className="btn-order">Заказать</button>
                <button onClick={() => {removeOrder(order)}} className="btn-order2">Удалить</button>
            </div>
        </div>
        )
      })

    return(
        <div className='container5'>
            <div className="my-orders">
                <h1>Корзина</h1>
                {orderList}
            </div>
        </div>
    )
}
