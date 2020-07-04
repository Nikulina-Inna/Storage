import React from 'react';
import SizeTile from  './sizeTile';
import ColorTile from './colorTile';

function TileMenu ({heading, setColor, setSize, setData}) {

    let colorName = [];
    let sizeName = [];

    switch (heading) {
        case "clothes":
            sizeName = ["s", "m", "l", "xl"];
            colorName = ["blue", "black", "pink", "green",
            "gray", "red", "brown", "yellow", "white"];
        break;
        case "footwear":
            sizeName = ["37", "38", "39", "40", "41"];
            colorName = ["brown", "black", "pink", "white"];
        break;
        case "accessories":
            colorName = ["pink", "red", "yellow", 
            "blue","gray", "white"];
        break;
    }



    return (
        <React.Fragment>
            <p className= "ClothesSizeMenu">Размер</p>

                {sizeName.map((item, index) => {
                    return (
                        <SizeTile 
                            key = {index}
                            name = {item}
                            applyFilter = {setSize}
                            setData = {setData}
                        />
                    ) 
                })}

            <p className= "ClothesSizeMenu">Цвет</p>

                {colorName.map((item, index) => {
                        return (
                        <ColorTile 
                            key = {index}
                            name = {item}
                            applyFilter = {setColor}
                            setData = {setData}
                        />
                    ) 
                })}
            
        </React.Fragment>
        
    )
}

export default TileMenu