import React, {useState, useEffect} from 'react';

import Header from './components/header';
import CatalogBody from './components/catalogBody';
import Footer from './components/footer';

import getItems from '../methods/getItems';


function CatalogPage() {

  const [classState, setClassState] = useState("clothes");
  const [subClass, setSubClass] = useState("all");
  const [color, setColor] = useState("all");
  const [size, setSize] = useState("all");
  const [name, setName] = useState("all");
  const [newItem, setnewItem] = useState(false);

  const [data, setData] = useState(null);

  console.log(classState)

  useEffect( () => {
    if (!data) getItems ({setData, itemClass: classState, 
      subClass: subClass, color: color,
      size: size, name: name, newItem: newItem});
  });

  function chooseItemClass (itemClass) {
    setClassState(itemClass);
    setSubClass("all");
    setColor("all");
    setSize("all");
    setName("all");
  };

  function chooseSubClass (SubClass) {
    setSubClass(SubClass);
  }

    return (

      <React.Fragment>
        <header>

          <Header 
            chooseItemClass = {chooseItemClass} 
            setData = {setData}
            setName = {setName}
            setnewItem = {setnewItem}
            setClassState = {setClassState}
            isCatalog = {true}
            />

          <CatalogBody 
            data={data}
            chooseSubClass = {chooseSubClass}
            setColor = {setColor}
            setSize = {setSize}
            setName = {setName}
            setData = {setData}
            setClassState = {setClassState}
            color = {color}
            size = {size}
          />
        </header>
          
        <footer>
          <Footer
            setClassState = {setClassState}
            chooseSubClass = {chooseSubClass}
            setData = {setData}
          />
        </footer>

      </React.Fragment>

       
    );
  }

  export default CatalogPage;