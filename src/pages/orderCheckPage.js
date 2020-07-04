import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import getUserById from '../methods/getUserById';

import getActiveOrder from '../methods/getActiveOrder';
import finishActiveOrder from '../methods/finishActiveOrder';

import Header from './components/header';
import Footer from './components/footer';

function OrderFinishPage () {

    const userId = useParams().id;

    const [user, setUser] = useState(null);
    const [order, setOrder] = useState(null);

    const [userName, setUserName] = useState("");
    const [userLastname, setUserLastname] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userAdress, setUserAdress] = useState("");
    const [allPrice, setAllPrice] = useState(0); 
    const [delivery, setDelivery] = useState("самовывоз");
    const [payment, setPayment] = useState("наличными");

    let price=[];
    let totalPrice = 0;

    const setDeliveryMode = event => {
        setDelivery(event.target.value);
    }
    const setPaymentMode = event => {
        setPayment(event.target.value);
    }
    
    if (order) {
        if (!order.message) {
            console.log(order)
            price = order.price;
            price.map(price => {
                totalPrice = totalPrice + price;
            });
        }
    }

    useEffect( () => {
        if (!user) {
          getUserById(setUser, userId);
          getActiveOrder({setData: setOrder, userId});
        } else {
            setUserName(user.name);
            setUserLastname(user.lastName);
            setUserPhone(user.phone);
            setUserAdress(user.adress);
            setAllPrice(totalPrice);

        }
    })
  
    return (
      <React.Fragment>

        <Header isCatalog = {false}/>
      
            <table className= "tableInfoOrder">
            <tbody>
                <tr>
                    <td>
                        <div className="infoUserOrder">
                            <b><u>Личная информация</u></b><br /> <br />      
                            <p>Имя: </p> <br />
                            <input className ="nameUser" readOnly={true} value={userName}/>
                            <p>Фамилия: </p> <br />
                            <input className ="lastNameUser" readOnly={true} value={userLastname}/>
                            <p>Телефон: </p> <br />
                            <input className ="phoneUser" readOnly={true} value={userPhone}/>
                            <p>Адрес доставки: </p> <br />
                            <input className ="adressUser" readOnly={true} value={userAdress}/><br /> <br />
                        </div>
                    </td>
                    <td>
                        <div className= "infoOrder"></div>
                            <b><u>Получение заказа</u></b><br /> <br />
                            <p>Способ получения: </p> <br />
                            <div className= "select">
                                <select size="1" onChange={setDeliveryMode}>
                                    <option value = "самовывоз">Самовывоз</option>
                                    <option value = "курьером">Доставка курьером</option>
                                </select>
                            </div><br />
                            <p><b>Адрес самовывоза: </b> г. Таганрог ул.Шлюзовая набережная, 4 </p> <br /> <br />
                            <p>Способ оплаты: </p> <br />
                                <div className= "select">
                                    <select size="1" onChange={setPaymentMode}>
                                        <option value = "наличными">Наличными</option>
                                        <option value = "картой">Картой курьеру</option>
                                    </select>
                                </div><br /> <br />
                            <b><u>Итого к оплате:</u> {allPrice} RUB </b><br />
                            <button 
                                className="confirmOrderBut" 
                                onClick = {() => {
                                    finishActiveOrder({setData: setOrder, userId, delivery, payment});
                                    alert("Ваш заказ оформлен!");
                                    window.location.assign(`../catalog`);
                                }}
                                
                            >Подтвердить заказ</button> <br /> <br />	
                    </td>
                </tr>
            </tbody>
            </table>

        <Footer />

      </React.Fragment>
    );
  }
  
  export default OrderFinishPage;