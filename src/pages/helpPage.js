import React from 'react';

import Header from './components/header';
import Footer from './components/footer';

function helpPage() {
   
    return (
      <React.Fragment>

        <Header />


        <div>
          <div class="help">
            <b id="order"><u>Как сделать заказ?</u></b>
            <p>1. Выберите товары и добавьте их в корзину. Если вы не авторизованы, авторизуйтесь с помощью логина и пароля.<br />
            2. Перейдите в раздел Корзина и нажмите Оформить заказ.<br />
            3. Укажите ваши данные.<br />
            4. Выберите способ доставки.<br />
            5. Выберите способ оплаты и нажмите Подтвердить заказ.<br /></p>
            <b id="payment"><u>Оплата</u></b>
            <p><b>Наличными</b><br />
            Чтобы оплатить заказ наличными, при оформлении заказа выберите Наличными или картой курьеру и нажмите Подтвердить заказ. После оплаты заказа вы получите чек.<br /></p>			
            <b id="delivery"><u>Доставка</u></b>
            <p><b>Курьерская доставка</b><br />
            Если предоплаченный заказ более 3000 рублей, то курьер может попросить документ, удостоверяющий личность (например, паспорт).<br /></p> 
            <b id="contacts"><u>Контакты</u></b>
            <p> ИНТЕРНЕТ МАГАЗИН ОДЕЖДА<br />
              ООО «ОДЕЖДА»<br />
              ШЛЮЗОВАЯ НАБЕРЕЖНАЯ 4, 347922 ТАГАНРОГ РОССИЯ<br /><br />
          
              СВЯЗАТЬСЯ С НАМИ<br />
              БУДНИ: 8:30-17:30 (МОСКОВСКОЕ ВРЕМЯ)<br /><br />
          
              8 999 599 29 99<br />
            </p>
          </div>		
        </div>

        <Footer />

      </React.Fragment>
      
    );
  }
  
  export default helpPage;