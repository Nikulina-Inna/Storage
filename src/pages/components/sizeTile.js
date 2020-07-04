import React from 'react';

function SizeTile ({name, applyFilter, setData}) {

    return (
        <React.Fragment>
            <button 
                className="ButSize"
                onClick = {() => {applyFilter(name); setData(null)}}
            > 
            {name.toUpperCase()} 
            </button>
        </React.Fragment>
    )
}

export default SizeTile