async function orderAction (setData, id, action) {
    
    const url = "http://localhost:4000/api/order/orderAction";

    let responce = await fetch (`${url}?id=${id}&action=${action}`);
    const req = await responce.json();

    setData(null);
    return(req);
}

export default orderAction