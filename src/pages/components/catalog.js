import React from 'react';

function Catalog ({data, maxPage, page, setPage}) {

    let firstString = [];
    let secondString = [];

    if (data) {
        firstString = data.slice(0, 4);
        secondString = data.slice(4, 8);
    }

    function Element ({id, src, price, name}) {
        return (
            <td >
                <a href={`/itemCard/${id}`} className="linkForGoods" > 
                    <div>
                        <img className = "Goods" src={src} />
                    </div>
                    <p className = "PriceClothes"> {price} </p>
                    <p className = "InfoClothes"> {name} </p>
                </a>
            </td>
        )
    }



    return (
        <React.Fragment>
            <table className = "TableGoods">
                <tbody>
                    <tr>
                        {firstString.map(item => {
                            return (
                                <Element 
                                key = {item._id}
                                id = {item._id}
                                src = {item.picture[0]}
                                price = {item.price}
                                name = {item.name}
                                />
                            )
                        })}
                    </tr>
                    
                    <tr>
                        {secondString.map(item => {
                                return (
                                    <Element 
                                    key = {item._id}
                                    id = {item._id}
                                    src = {item.picture[0]}
                                    price = {item.price}
                                    name = {item.name}
                                    />
                                )
                            })} 
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                        <td>
                            <div className="butNavigation">
                                <button className = "butBack" onClick = {() => setPage(page - 1)}> ← </button>
                                <button className = "butBack" onClick = {() => setPage(page + 1)}> → </button>
                                <p> Текущая страница: {page} </p>
                                <p> Всего страниц: {maxPage} </p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
                
        </React.Fragment>
    )
}

export default Catalog