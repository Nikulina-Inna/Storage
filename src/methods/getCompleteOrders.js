async function getCompleteOrders (setData, userId) {
    
    const url = "http://localhost:4000/api/order/getCompleteOrders";

    let responce = await fetch (`${url}?userId=${userId}`);
    const req = await responce.json();
    
    setData(req);
}

export default getCompleteOrders