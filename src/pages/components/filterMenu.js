import React from 'react';

import SubClassFilter from './subClassFilter';

function FilterMenu ({heading,setClassState, chooseSubClass, setData, chooseColor}) {

    let name = "";
    let subClassName = [];
    let subClass = [];

    switch (heading) {
        case "clothes":
            name = "Одежда";
            subClassName = ["Вержняя одежда", "Толстовки, свитшоты",
            "Футболки", "Платья", "Джинсы"];
            subClass = ["outerwear", "hoody", "shirt", "dress", "jeans"];
            break;
        case "footwear":
            name = "Обувь";
            subClassName = ["Ботинки", "Кроссовки", "Кеды"];
            subClass = ["boots", "sneakers", "miniSneakers"];
            break;
        case "accessories":
            name = "Аксессуары";
            subClassName = ["Сумки, рюкзаки", "Кошельки", "Шапки, шарфы",
            "Очки", "Бижутерия"];
            subClass = ["bag", "purse", "hats", "glasses", "jewelry"];
            break;
    }

    return (
        <React.Fragment>
            <p className= "ClothesMenu">{name}</p>
            {subClassName.map ((item, index) => {
                return (
                    <SubClassFilter 
                        name = {subClass[index]}
                        key = {index}
                        item = {item}
                        chooseSubClass = {chooseSubClass}
                        setData = {setData}
                        chooseColor = {chooseColor}
                        heading = {heading}
                        setClassState = {setClassState}
                     />
                    )}
            )}
        </React.Fragment>

    )
}



export default FilterMenu