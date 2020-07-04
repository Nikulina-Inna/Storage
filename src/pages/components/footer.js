import React, {useState} from 'react';
import FilterMenu from './filterMenu';



function Footer ({setClassState, chooseSubClass, setData}) {

    const [checked, setChacked] = useState(false);
    const [email, setEmail] = useState("");
    const [infoInput, setInfoInput ] = useState("email");

    const emailValue = event => {
        setEmail(event.target.value);
    }

    async function subscribe (checked) {
        if (checked) {
            const url = "http://localhost:4000/api/data/subscribe";
            let responce = await fetch (url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({email})
            });
            let info = await responce.json();

            if (info.message) {
                setInfoInput (info.message);
            } else {
                setInfoInput ("подписка оформлена");
            }

        } else {
            setInfoInput("необходимо принять условия");
        }
    }

    return (
        <footer>
            <div className = "footerBackgroung">

                <table className = "TableFooter">
                <tbody>
                    <tr>

                        <td>
                                <div><img className = "logoModis" src = "img/MODIS.png" /></div>
                                <div className = "ImgLinkSocial">
                                        <li><a href="##"><img src="img/twitter.png"/> </a> </li>
                                        <li><a href="##"><img src="img/instagram.png"/> </a> </li>
                                        <li><a href="##"><img src="img/facebook.png"/> </a> </li>
                                </div>
                                <div className = "TextBlocked">
                                    <p>ⓒ 2019-2020 ООО “Одежда” Все права защищины</p>
                                </div>
                        </td>

                        <td>
                            <FilterMenu
                                heading = {"clothes"}
                                setClassState = {setClassState}
                                chooseSubClass = {chooseSubClass}
                                setData = {setData}
                                chooseColor = "white"
                            />
                        </td>

                        <td>
                        <FilterMenu
                                heading = {"footwear"}
                                setClassState = {setClassState}
                                chooseSubClass = {chooseSubClass}
                                setData = {setData}
                                chooseColor = "white"
                            />
                        </td>

                        <td>
                        <FilterMenu
                                heading = {"accessories"}
                                setClassState = {setClassState}
                                chooseSubClass = {chooseSubClass}
                                setData = {setData}
                                chooseColor = "white"
                            />
                        </td>

                        <td>
						<p className = "NameMenuStyle">Помощь</p>
						<p className = "LinkMenuStyle"><a href="/help">Как сделать заказ</a></p>
						<p className = "LinkMenuStyle"><a href="/help">Оплата</a></p>
						<p className = "LinkMenuStyle"><a href="/help">Доставка</a></p>
						<p className = "LinkMenuStyle"><a href="/help">Контакты</a></p>
					</td>

                    <td>
						<p className = "TextDiscount">Подпишитесь на рассылку новостей</p>
						<form>
							<div className ="Input">      
							   <input type="text" onChange = {emailValue} required />
							   <span className ="bar"></span>
							   <label>{infoInput}</label>
							</div>
						 </form>
						 <div className ="input_checkbox_list">
							<div className ="checkbox_item">
							  <input type="checkbox" id="check1" className="input-checkbox"
                              checked = {checked} onChange = {() => {setChacked(!checked)}} />
							  <label htmlFor="check1">Принимаю условия рассылки</label>
							</div>
						 <div className = "ButInTable">
						 <button className = "ButtonOK" onClick = {() => {subscribe(checked)}}>Подписаться</button>
						</div>
                        </div>
					</td>

                    </tr>
                </tbody>
                </table>

		    </div>
        </footer>
    )
}

export default Footer