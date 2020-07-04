async function deleteActiveOrder ({setData, userId}) {
    
    const url = "http://localhost:4000/api/order/deleteActiveOrder";

    let responce = await fetch (`${url}?userId=${userId}`);
    const req = await responce.json();
    console.log(req)
    setData(req);
}

export default deleteActiveOrder