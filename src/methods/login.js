
async function login ({email, password}) {

    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    const url = "http://localhost:4000/api/auth/login";

    let responce = await fetch (`${url}?email=${email}&password=${password}`);
    let user = await responce.json();

    localStorage.setItem("token", user.token);
    localStorage.setItem("userId", user.userId);
    
    return user

}

export default login