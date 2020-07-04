import React, {useState} from 'react';

import Footer from './components/footer';
import Header from './components/header';

function MainPage() {

  const src1 = "img/background.png";
  const src2 = "img/background2.png";

  const [activeBackground, setActiveBackground] = useState (src1);

  function chooseBackground () {
    let nextSrc = "";
    if (activeBackground === src1) {
      nextSrc = src2;
    } else {
      nextSrc = src1;
    }
    setActiveBackground(nextSrc);
  }
   
    return (
      <React.Fragment>
        <img 
          className = "background" 
          src={activeBackground} 
          onClick ={() => chooseBackground()} 
          alt="background"></img>
          <header>
            <Header isCatalog={false}/>
            
              <p className = "bigtext">Создавай свой стиль вместе с нами</p>
              <p className = "littletext">Мы объединяем последние тренды с уличным стилем и 
                собственным уникальным взглядом на моду, создавая индивидуальную, оригинальную 
                и неподвластную времени одежду</p>

              <button className = "goToCatalog" onClick={event => window.location.href='/catalog'}>Перейти в каталог →</button>
              <div className = "JoinAndImgButDiv">

                <p className = "join">Присоединяйся к нам:</p>
                <p className = "instagram">@MODIS.SHOP</p>

              </div>

          </header>
        



        <Footer />

      </React.Fragment>
    );
  }
  
  export default MainPage;