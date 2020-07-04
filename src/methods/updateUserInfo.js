async function updateUser (id, name, lastname, phone, adress) {
    const url = "http://localhost:4000/api/user/updateUser";

    const jsonId = JSON.stringify(id);
    const jsonName = JSON.stringify(name);
    const jsonLastname = JSON.stringify(lastname);
    const jsonPhone = JSON.stringify(phone);
    const jsonAdress = JSON.stringify(adress);

    let responce = await fetch (`${url}?userId=${id}&userName=${name}&userLastname=${lastname}&userPhone=${phone}&userAdress=${adress}`);
    let result = await responce.json();
    return result.message

}

export default updateUser