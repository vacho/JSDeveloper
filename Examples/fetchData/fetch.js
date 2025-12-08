
const baseUrl = 'https://dogapi.dog/api/v2/breeds/';

async function getData(id) {
    try {
        let res = await fetch(baseUrl + id);
        let data = await res.json();
        return data;
    }
    catch (error) {
        console.log(`ERROR MANAGED: ${error}`);
        return null;
    }
}
// Promise style.
let data1 = getData('43cdadb4-851b-4a3a-99c1-5f63d08d97f8');
data1.then(response => {
    console.log(response.data.attributes.name);
});

// Async/Await style.
let data2 = await getData('ce40589c-295a-4259-9e83-711854db8129');
console.log(data2.data.attributes.name);
