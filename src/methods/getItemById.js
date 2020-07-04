async function getItemById (setItem, id) {
    const url = "http://localhost:4000/api/data/ItemById";

    const jsonId = JSON.stringify(id);

    let responce = await fetch (`${url}?id=${id}`);
    let item = await responce.json();
    setItem(item);
}

export default getItemById