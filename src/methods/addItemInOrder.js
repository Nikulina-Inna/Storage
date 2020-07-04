async function addItemInOrder ({item, size, userId, itemPrice, picture, value}) {
    
    const url = "http://localhost:4000/api/order/AddOrder";

    const order = {item, size, userId, itemPrice, picture, value};
    console.log(order);

    let responce = await fetch (`${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(order)
    });

    const req = await responce.json();
    
    return req
}

export default addItemInOrder