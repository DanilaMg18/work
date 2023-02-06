import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


export default function Admin() {
    const cart = useSelector((state) => state.orders.Allorders)
    const navigate = useNavigate()


    let orderList = cart.map((order,idx) =>  {
        return(
        <div className="orders" data-id={order.id} key={idx}>
            <div className="ps">{order.orderName}</div>
            <div className="order-block2">
                <div>{order.price}</div>
                <button className="btn-order">Заказать</button>
            </div>
        </div>
        )
      })

    return(
        <div className='container5'>
            <div className="admin-panel">
                <p className="p-admin" onClick={() => {navigate('/')}}>Ты в админ меню</p>
            </div>
            <div className="my-orders">
                <h1>Корзина</h1>
                {orderList}
            </div>
        </div>
    )
}
