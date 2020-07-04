import React, {useState, useEffect} from 'react';

import getCompleteOrders from '../methods/getOrdersForAdmin';
import orderAction from '../methods/orderAction';


function AdminCabinet () {

    const [orders, setOrders] = useState(null);

    function OrdersList () {
        if (orders) {
            if (orders.message) {
                return (
                    <div>
                        <h1>{orders.message}</h1>
                    </div>
                )
            } else {
                return (
                    orders.map((item, index) => {
                        return (
                            <tr key = {index}>
                                <td> {index+1} </td>
                                <td> {item._id} </td>
                                <td> {item.userId} </td>
                                <td> {item.payment} </td>
                                <td> {item.delivery} </td>
                                <td> 
                                    <button className="okAdminButton"
                                        onClick = {() => orderAction(setOrders, item._id, "complete")}
                                    
                                    >
                                        Принять
                                    </button>

                                    <button className="adminButton" onClick = {() => orderAction(setOrders, item._id, "rejected")}>
                                        Отклонить
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                )
            }

        } return (
            <div>
                <h1>
                    Обновление списка заказов
                </h1>
            </div>  
        ) 
    }

    useEffect(() => {
        if (!orders) {
            getCompleteOrders(setOrders);
            console.log(orders)
        }
    }, 
    [orders]);

    return (
        <div>
            <table className = "tableAdminBay">
                <tbody>
                    <tr>
                        <td> Номер заказа </td>
                        <td> Айди заказа </td>
                        <td> Айди пользователя </td>
                        <td> Оплата </td>
                        <td> Доставка </td>
                        <td> Действие </td>
                    </tr>
                    <OrdersList />
                </tbody>
            </table>
            <div className="firstButClass">
                <button className="firstBut">
                    <a href = "/">
                        На главную
                    </a>
                </button>
            </div>            
        </div>
    )
}

export default AdminCabinet