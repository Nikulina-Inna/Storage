import React from 'react';

    function SubClassFilter ({name, item, chooseSubClass, setData, chooseColor, heading, setClassState}) {

        let style = {
            color: chooseColor
        }

        return (
            <React.Fragment >
                <p className= "LinkClothesMenu"
                name = {name}
                onClick ={() => {
                    chooseSubClass(name); 
                    setData(null);
                    setClassState(heading);
                    }}
                >
                    <a href="##"  style = {style}> {item} </a>
                </p>
            </React.Fragment> 
        )
    }

export default SubClassFilter