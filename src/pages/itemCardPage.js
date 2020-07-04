import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import getItemById from '../methods/getItemById';
import getItems from '../methods/getItems';
import addItemInOrder from '../methods/addItemInOrder';

import Header from './components/header';
import Footer from './components/footer';

function ItemCardPage() {

   const itemId = useParams().id;

   let itemClassName = "";
   let itemSubClassName = "";
   let itemName = "";
   let itemPrice = "";
   let itemDescription = "";
   let itemSize = [];
   let itemImages = [];

   let recommendedItems = [];

   const [item, setItem] = useState(null);
   const [recommended, setRecommended] = useState(null);
   const [counter, setCounter] = useState(1);
   const [size, setSize] = useState(null);

   function chooseItemsValue (value) {
      if (value < 1) {
        value = 1;
      } else if (value > 10) {
        value = 10;
      }
      setCounter(value);
   }

    if (item) {

      switch (item.itemClass) {
        case "clothes":
          itemClassName = "Одежда";
        break
        case "footwear":
          itemClassName = "Обувь";
        break
        case "accessories":
          itemClassName = "Аксессуары"
        break
        default:
          itemClassName = "";
      }

      itemName = item.name;
      itemPrice = item.price;
      itemDescription = item.description;
      itemSize = item.size;
      itemImages = item.picture;
      itemSubClassName = item.subClass;
    }

    async function ItemToOrder () {
      const userId = localStorage.getItem("userId");
      const price = parseInt(itemPrice) * counter;
      const order = await addItemInOrder({item: itemName, size: size,
        userId: userId, itemPrice: price, picture: itemImages[0], value: counter});
      alert("Товар добавлен в корзину");
     }

    if (recommended) {
      recommendedItems = recommended;
      recommendedItems.map((item, index) => {
        if (item._id === itemId) {
          recommendedItems.splice(index, 1);
        }
      })
      recommendedItems = recommendedItems.slice(0, 5);
    }

   useEffect( () => {
    if (!item) {
      getItemById(setItem, itemId);
      getItems({setData: setRecommended, itemClass: itemClassName, subClass: itemSubClassName});
    }
  });

    return (
      <React.Fragment>

        <header>

          <Header isCatalog={false}/>

            <table className = "TablePhotoBuy">
              <tbody>
                <tr>
                  <td className = "LittleVerticalPhoto">
                    <img src = {itemImages[0]}  alt="little1"/>
                    <img src = {itemImages[1]}  alt="little2"/>
                  </td>

                  <td>
                    <img
                      className = "bigImgCard"
                      src = {itemImages[0]} 
                      alt="big"
                    />
                  </td>
                </tr>	
              </tbody>
            </table>

            <p className = "NameMenuGrey"> {itemClassName} </p>
		        <p className = "NameClothes"> {itemName} </p>
            <p className = "PriceBuy"> {itemPrice} </p>
            <p className = "quantityText">Количество</p>

          <div className = "quantityTable">
            <table >
                <tbody>
                  <tr>

                    <td>
                      <button 
                        className = "Quantity"
                        onClick = {() => chooseItemsValue(counter-1)}
                      >
                       - 
                      </button>
                    </td>

                    <td>
                      <p className = "Quantity"> {counter} </p>
                    </td>

                    <td>
                      <button 
                        className = "Quantity"
                        onClick = {() => chooseItemsValue(counter+1)}
                      >
                       + 
                       </button>
                    </td>

                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className = "quantityText">Размер</p>

            <div className = "SizeCard">
              {itemSize.map((item, index) => {
                return (
                  <button 
                  key={index}
                  onClick = {() => setSize(item)}
                  >
                    {item.toUpperCase()}
                  </button>
                )
              })}
            </div>

            <p className = "quantityText">Материал: {itemDescription}</p>

		        <div className = "rightBlock">
		          <button 
              className = "inBasket"
              onClick = {() => ItemToOrder()}
              >
              Добавить в корзину
              </button>
		        </div>

            <div className = "QuantityS">
              <p className = "quantityText">
                <img src="img/car.png" alt = "car" /> 
                Бесплатная доставка при заказе от 2 000 RUB 
              </p>
              <p className = "quantityText">
                <img src="img/back.png" alt = "back" /> 
                Возможность возврата в течении 30 дней 
              </p>
            </div>

            <p className ="recommendations">Похожие товары</p>

            <table className = "TableRecommendations">
              <tbody>
                <tr>
                  {recommendedItems.map((item, index) => {
                    return (
                      <td key = {index}>
                        <a href={`/itemCard/${item._id}`} className="linkForGoods" >
                          <div>
                            <img className ="Goods" src = {item.picture[0]} />
                          </div>
                          <p className = "PriceClothes"> {item.price} </p>
                          <p className = "InfoClothes"> {item.name} </p>
                        </a>
                        </td>
                    )
                  })}
                </tr>
              </tbody>
            </table>
		       

			      <div className = "fashionImg">
              <img src="img/FASHION.png" alt = "fashion"/>
            </div>

        </header>

        <Footer />

      </React.Fragment>
    );
  }
  
  export default ItemCardPage;