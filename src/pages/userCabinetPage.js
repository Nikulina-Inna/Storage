import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import Footer from './components/footer';
import Header from './components/header';

import getUserById from '../methods/getUserById';
import updateUser from '../methods/updateUserInfo';
import getCompleteOrders from '../methods/getCompleteOrders';

function UserCabinetPage() {

  const userId = useParams().id;

  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  const [userName, setUserName] = useState("");
  const [userLastname, setUserLastname] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAdress, setUserAdress] = useState("");
  const [editUserInfo, setEditUserInfo] = useState(true);

  let editButtonText = "Изменить";
  let totalPrice = 0;
  
    if (!editUserInfo) {
      editButtonText = "Отменить";
    }

    const setNewUserName = event => {
      setUserName(event.target.value);
    }
    const setNewUserLastname = event => {
      setUserLastname(event.target.value);
    }
    const setNewUserPhone = event => {
      setUserPhone(event.target.value);
    }
    const setNewUserAdress = event => {
      setUserAdress(event.target.value);
    }
  
    async function saveNewUserData () {
      const result = await updateUser(userId, userName, userLastname, userPhone, userAdress);
      setUser(null);
      setEditUserInfo(!editUserInfo);
      alert (result);
    }

    function OrderHistory () {
      if (orders) {
          return (
              orders.map((item,index) => {
                return (
                  <CompleteOrderInHistory 
                    item = {item}
                    index={index}
                    key={index}
                  />
                )
              })
            
          )
      } else {
        return (
          <h1> Нет заказов </h1>
        )
      }
    }

    function CompleteOrderInHistory ({item,index}) {
      item.price.map(item => {
        totalPrice = totalPrice + item
      })
      return (
        <tr>
            <th>{index+1}</th>
            <th>{totalPrice} RUB</th>
            <th>{item.payment}</th>
            <th>{item.delivery}</th>
            <th>{item.date[2]}.{item.date[1]}.{item.date[0]}</th>
        </tr>
      )
    }

  useEffect( () => {
    if (!user) {
      getUserById(setUser, userId);
      getCompleteOrders(setOrders, userId);
    } else {
      if (editUserInfo) {
        setUserName(user.name);
        setUserLastname(user.lastName);
        setUserPhone(user.phone);
        setUserAdress(user.adress);
      }
    }
  })
   
    return (
      <React.Fragment>

        <Header isCatalog={false}/>

        <div className="histopyBay">
        <b><u>История заказов</u></b><br /><br />
        <table className= "tableHistopyBay">
          <tbody>
            <tr>
            <th>№</th><th>Стоимость</th><th>Оплата</th><th>Доставка</th>
            <th>Дата</th>
            </tr>
            <OrderHistory />
          </tbody>
        </table>

      </div>

          <div className="infoUser">
          <b><u>Личная информация</u></b><br /><br />

          <p>Имя: </p> <br />
          <input 
            name ="nameUser" 
            value={userName} 
            readOnly={editUserInfo}
            onChange={setNewUserName}
          />

          <p>Фамилия: </p> <br />
          <input 
            name ="lastNameUser" 
            value={userLastname} 
            readOnly={editUserInfo}
            onChange={setNewUserLastname}
          />

          <p>Телефон: </p> <br />
          <input 
            name ="phoneUser" 
            value={userPhone} 
            readOnly={editUserInfo}
            onChange={setNewUserPhone}
          />

          <p>Адрес доставки: </p> <br />
          <input 
            name ="adressUser" 
            value={userAdress} 
            readOnly={editUserInfo}
            onChange={setNewUserAdress}
          />

          <button 
            className="changeBut"
            onClick = {() => {
              setEditUserInfo(!editUserInfo);
            }} 
          >
          {editButtonText}
          </button>

          <button 
            className="saveBut"
            onClick = {() => {
              saveNewUserData();
            }} 
          >
          Сохранить
          </button>
          		
          </div>

          <Footer />

        </React.Fragment>
    );
  }
  
  export default UserCabinetPage;