async function getUserById (setUser, id) {
    const url = "http://localhost:4000/api/user/UserById";

    const jsonId = JSON.stringify(id);

    let responce = await fetch (`${url}?id=${id}`);
    let user = await responce.json();
    setUser(user);
}

export default getUserById