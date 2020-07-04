async function getActiveOrder ({setData, userId}) {
    
    const url = "http://localhost:4000/api/order/getActiveOrder";

    let responce = await fetch (`${url}?userId=${userId}`);
    const req = await responce.json();
    
    setData(req);
}

export default getActiveOrder