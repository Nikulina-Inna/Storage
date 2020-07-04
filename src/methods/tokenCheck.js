
async function tokenCheck () {

   const token = localStorage.getItem("token");
    
    const url = "http://localhost:4000/api/check/tokenCheck";

    let responce = await fetch (`${url}?token=${token}`);
    let check = await responce.json();
    
    return check

}

export default tokenCheck