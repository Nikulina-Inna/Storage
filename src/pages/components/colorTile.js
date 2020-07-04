import React from 'react';

function SizeTile ({name, applyFilter, setData}) {

    let style = {
        "backgroundColor": name
    }

    return (
        <React.Fragment>
            <button 
                className="ButColor"
                style = {style}
                onClick = {() => {applyFilter(name); setData(null)}}
            >  
            </button>
        </React.Fragment>
    )
}

export default SizeTile