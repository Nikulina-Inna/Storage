async function finishActiveOrder ({setData, userId, delivery, payment}) {
    
    const url = "http://localhost:4000/api/order/confirmOrder";

    let responce = await fetch (`${url}?userId=${userId}&delivery=${delivery}&payment=${payment}`);
    const req = await responce.json();

    setData(null);
}

export default finishActiveOrder