async function registration ({email, password, name, lastName, phone, adress}) {
    
    const url = "http://localhost:4000/api/auth/register";

    const user = {email, password, name, lastName, phone, adress}

    let responce = await fetch (`${url}?email=${email}&password=${password}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)  
    });

    const req = await responce.json();
    
    return req
}

export default registration