import React, {useState, useEffect} from 'react';
import getActiveOrder from '../methods/getActiveOrder';
import deleteActiveOrder from '../methods/deleteActiveOrder';

import Header from './components/header';
import Footer from './components/footer';

function BusketPage() {

  const userId = localStorage.getItem("userId");
  const [order, setOrder] = useState(null);

  console.log(order)

  let items = [];
  let size = [];
  let price = [];
  let picture = [];
  let itemsValue = [];
  let allPrice = 0;

  if (order && !order.message) {
    items = order.items;
    size = order.size;
    price = order.price;
    picture = order.picture;
    itemsValue = order.value;
    price.map(price => {
      allPrice = allPrice + price;
    })
  }

  useEffect( () => {
    if (!order) {
      getActiveOrder({setData: setOrder, userId});
    }
  });
  
    return (
      <React.Fragment>
      <Header isCatalog = {false}/>
      
        <div className = "WorkingPartBasket">
						<table className= "TableBasket">
              <tbody>

								<tr>
								 <th>&nbsp;</th><th>Товар</th><th>Размер</th><th>Количество</th>
								 <th>Сумма</th>
								</tr>

                
                  {items.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <img 
                            className= "SizeImgBasket" 
                            src = {picture[index]} 
                            />
                        </td>
								        <td> 
                          {item} 
                        </td>
                        <td>
                          {size[index]}
                        </td>
                        <td> 
                          {itemsValue[index]} 
                        </td>
								        <td>
                          {price[index]} RUB
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
						</table>

						<div className= "DownLineBasket">

						  <p className= "AllPrice">Товаров на: {allPrice} RUB</p>

						  <button 
                className= "Bay" 
                onClick = {() => {
                  window.location.assign(`../orderFinish/${userId}`);
                }}
              >
                Оформить заказ
                </button>

                <button 
                className = "notBuy"
                onClick = {() => {
                  deleteActiveOrder({setData: setOrder, userId});
                }} 
              >
                Отменить заказ
              </button>

						</div>
            
            
					</div>
          <Footer />
      </React.Fragment>
    );
  }
  
  export default BusketPage;