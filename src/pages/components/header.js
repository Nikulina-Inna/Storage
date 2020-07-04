import React, {useState, useEffect} from 'react';
import login from '../../methods/login';
import registration from '../../methods/registration';
import tokenCheck from '../../methods/tokenCheck';
import getUserById from '../../methods/getUserById';

function Header ({chooseItemClass, setData, setName, setnewItem, setClassState, isCatalog}) {

    const [emailLog, setEmailLog] = useState("");
    const [passLog, setPassLog] = useState("");

    const [user, setUser] = useState("");

    const [userName, setUserName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userAdress, setUserAdress] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passReg, setPassReg] = useState("");

    const [checkTokenRes, setcheckTokenRes] = useState(false);

    const userId = localStorage.getItem("userId");
    let busketHref = "##";
    let userCabHref = "##";

    if (checkTokenRes) {
        busketHref = `/busket/${userId}`;
        userCabHref = `/userCabinet/${userId}`;
    }

    if (user.isAdmin) {
        userCabHref = "/adminCabinet";
    }

    

    useEffect(  () => {
        if (!user) {
            getUserById(setUser, userId);
        }
        async function checkTokenActuality () {
           const checkRes = await tokenCheck();
           let checkStatus = false;
           if (checkRes) {
            if (!checkRes.message) {
                checkStatus = true;
               }
           }
            setcheckTokenRes(checkStatus);
        }
        checkTokenActuality ();
    }, [checkTokenRes])


    const searchItem = event => {
        setData(null);
        setClassState("all");
        setName(event.target.value);
    }

    const emailLogValue = event => {
        setEmailLog(event.target.value);
    }

    const passLogValue = event => {
        setPassLog(event.target.value);
    }

    const userNameValue = event => {
        setUserName(event.target.value);
    }

    const userLastNameValue = event => {
        setUserLastName(event.target.value);
    }

    const userPhoneValue = event => {
        setUserPhone(event.target.value);
    }

    const userAdressValue = event => {
        setUserAdress(event.target.value);
    }

    const emailRegValue = event => {
        setEmailReg(event.target.value);
    }

    const passRegValue = event => {
        setPassReg(event.target.value);
    }

    async function regestration () {
        const postUser = await registration ({email: emailReg, password: passReg, name: userName,
            lastName: userLastName, phone: userPhone, adress: userAdress});
            if (postUser.message) {
                alert(postUser.message);
            } else {
                alert ("Регистрация выполнена");
            }
    }

    async function islogin () {
        const user = await login({email: emailLog,password: passLog});
            if (user.message) {
                alert (user.message);
            } else {
                alert ("Вход выполнен");
                window.location.reload(true);
            }
    }

    function CenterMenu ({isCatalog}) {
  
        if (isCatalog) {
            return (
                <div className="LinkCenterMenu">
                        <ul>
                            <li>
                                <a 
                                    href="##"
                                    onClick={ () => {
                                        chooseItemClass("clothes"); 
                                        setData(null);
                                        setnewItem(false);
                                    }}
                                >
                                Одежда
                                </a>
                            </li>

                            <li>
                                <a 
                                    href="##" 
                                    onClick={ () => {
                                        chooseItemClass("footwear"); 
                                        setData(null);
                                        setnewItem(false);
                                    }}
                                >
                                Обувь
                                </a>
                            </li>

                            <li>
                                <a 
                                    href="##" 
                                    onClick={ () => {
                                        chooseItemClass("accessories"); 
                                        setData(null);
                                        setnewItem(false);
                                    }}
                                >
                                Аксессуары
                                </a>
                            </li>

                            <li>
                                <a 
                                    href="##" 
                                    onClick={ () => {
                                        chooseItemClass("all");
                                        setData(null);
                                        setnewItem(true); 
                                    }}
                                >
                                Новинки
                                </a>
                            </li>
                        </ul>
                </div>
            )
        } else {
            return (
                <div className="LinkCenterMenu">
                    <ul>
                        <li>
                            <a 
                                href="/catalog" 
                            > Меню каталога </a>
                        </li>
                    </ul>
                </div>
            )
        }
    }




    return (
            <div className= "menu">
                    <div>
                        <a href="/">
                            <img className="logo" 
                            src="img/logo.png" 
                            alt="logo" 
                            />
                        </a>
                    </div>
                
                <CenterMenu isCatalog = {isCatalog}/>

                <div id="wrap">
				    <form 
                        action="" 
                        autoComplete="on"
                    >
				        <input 
                            id="search" 
                            name="search" 
                            type="text" 
                            placeholder="Поиск по названию"
                            onChange = {searchItem}
                        />
				        <input 
                        id="search_submit" 
                        type="submit" 
                        />
				    </form>
			    </div>

                <div className="ImgLinkMenu">
                    <ul>
                        <li><img src="img/search.png" alt="search" /></li>
                        <li><a href={busketHref}><img src="img/busket.png" alt="busket" onClick = {() => {if (!checkTokenRes) {alert("необходима авторизация")}}} /></a></li>
                        <li><a href="#win2"><img src="img/auth.png" alt="auth" /></a></li>
                        <li><a href={userCabHref}><img src="img/user.png" alt="user" onClick = {() => {if (!checkTokenRes) {alert("необходима авторизация")}}} /></a></li>
                    </ul>
			    </div>

                <a href="#x" className="overlay" id="win2"></a>

                <div className="popup">
			        <p>Авторизация</p>
			        <hr size="1px" width="100%" color="#C9CAC9" /><br />
			            <form name="iAccInput">
			                <p><input 
                                className= "loginInput" 
                                name="loginName" 
                                placeholder="✎ Логин" 
                                onChange = {emailLogValue}
                            /></p><br />
			                <p><input 
                                className= "loginInput" 
                                name="Password" 
                                placeholder="✎ Пароль" 
                                onChange = {passLogValue}
                            /></p><br />
			                <a className="linkReg" href="#win3">Регистрация</a>
			                <input 
                                className= "loginButton" 
                                value=" Вход" 
                                readOnly 
                                onClick = {() => islogin()}
                            />
			            </form> 
			            <a className="close"title="Закрыть" href="#close"></a>
			    </div>

                    <a href="#x" className="overlay" id="win3"></a>

                <div className="popupReg">
                    <p>Регистрация</p>
                    <hr size="1px" width="100%" color="#C9CAC9" /><br />
                        <form name="newAkk">

                            <p><input 
                                className= "newAkkInput" 
                                name="Name" 
                                placeholder="✎ Имя" 
                                onChange = {userNameValue}
                            /></p><br />
                            <p><input 
                                className= "newAkkInput" 
                                name="lastName" 
                                placeholder="✎ Фамилия" 
                                onChange = {userLastNameValue}
                            /></p><br />
                            <p><input 
                                className= "newAkkInput" 
                                name="phone" 
                                placeholder="✎ Телефон" 
                                onChange = {userPhoneValue}
                            /></p><br />
                            <p><input 
                                className= "newAkkInput" 
                                name="adress" 
                                placeholder="✎ Адрес доставки" 
                                onChange = {userAdressValue}
                            /></p><br />
                            <p><input 
                                className= "newAkkInput" 
                                name="email" 
                                placeholder="✎ Email" 
                                onChange = {emailRegValue}
                            /></p><br />
                            <p><input 
                                className= "newAkkInput" 
                                name="password" 
                                placeholder="✎ Пароль" 
                                onChange = {passRegValue}
                            /></p><br />

                            <input 
                                className= "newAkkButton" 
                                value=" Создать аккаунт " 
                                readOnly 
                                onClick = {() => regestration()}
                            />
                        </form> 
                    <a className="close"title="Закрыть" href="#close"></a>
                </div>

            </div>
    )
}

export default Header;