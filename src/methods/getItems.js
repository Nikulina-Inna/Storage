
async function getItems ({ setData, itemClass, subClass, color, size, name, newItem }) {

    itemClass = itemClass || "all";
    subClass = subClass || "all";
    color = color || "all";
    size = size || "all";
    name = name || "all";
    newItem = newItem || false;

    const key = "item";
    const oldKeys = Object.keys(sessionStorage).filter(item =>
        item.toLowerCase().includes(key));
    
        if (oldKeys.length) {
            oldKeys.map(key => {
                sessionStorage.removeItem(key);
            });
        }

    const url = "http://localhost:4000/api/data/Item";
    let responce = await fetch (`${url}?itemClass=${itemClass}&subClass=${subClass}&color=${color}&size=${size}&name=${name}&newItem=${newItem}`);
    let data = await responce.json();
    let newKeys = [];
    let items = [];

        if (data.message) {
            items = data;
        }

        if (data.lendth) {
                data.newData.map((item, index) => {
                const jsonItem = JSON.stringify(item);
                newKeys.push(`item${index}`);
                sessionStorage.setItem(`item${index}`,jsonItem);
            });
        }
    
    
    newKeys.map(key => {
        const item = JSON.parse(sessionStorage.getItem(key));
        items.push(item);
    });
    setData(items);
}


export default getItems