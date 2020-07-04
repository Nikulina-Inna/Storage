async function getCompleteOrders (setData) {
    
    const url = "http://localhost:4000/api/order/processingOrders";

    let responce = await fetch (`${url}`);
    const req = await responce.json();
    console.log(req)
    setData(req);
}

export default getCompleteOrders