import React, {useState, useEffect} from 'react';

import FilterMenu from './filterMenu';
import Catalog from './catalog';
import TileMenu from './tileMenu';

function CatalogBody ({data, chooseSubClass, setColor, setSize, setData, color, size, setClassState}) {
    const [page, setPage] = useState(1);
    const numberOfItems = 8;
    let maxPage = 1;
    let heading = null;
    let firstItem = 0;
    let endItem = 8;
    let counter = 0;

    useEffect(() => {
        let currentPage = null;
        if (page <= 1) {
          currentPage = 1;
        } else if (page >= maxPage) {
            currentPage = maxPage;
        } else {
            currentPage = page;
        }

        setPage(currentPage);
    })
    
    if (data) {
        if (data.message) {
            counter = data.message;
            data = [];
        } else {
            counter = `Найдено: ${data.length}`;
            heading = data[0].itemClass;
            maxPage = Math.ceil(data.length/numberOfItems);
            firstItem = numberOfItems * (page - 1);
            endItem = firstItem + numberOfItems;
            data = data.slice(firstItem,endItem);
        }
        
    }

    return (
    <div className = "WorkingPart">

        <div className="LeftMenu">

            <FilterMenu 
                heading={heading} 
                chooseSubClass = {chooseSubClass}
                setData = {setData}
                setClassState = {setClassState}
            />

            <TileMenu 
                heading={heading}
                setColor = {setColor}
                setSize = {setSize}
                setData = {setData}  
            />

            <div>
                <p>Выбранный цвет: {color}</p>
                <p> Выбранный размер: {size}</p>
                <p>  {counter} </p>
                <button
                    className="FilterSize"
                    onClick = {() => {
                        chooseSubClass("all");
                        setColor("all");
                        setSize("all");
                        setData(null);
                    }}
                > 
                    Очистить фильтр 
                </button>
            </div>

        </div>

        <Catalog 
            data = {data} 
            maxPage = {maxPage} 
            page={page} 
            setPage={setPage} 
        />
  
    </div>)
}

export default CatalogBody