// const res = fetch('https://catfact.ninja/fact')
//     .then((res) => { return res.json() }).then((data) => { console.log(data) })

// const getCatFetch = async () => {
//     const res = await fetch('https://catfact.ninja/fact');
//     const dat = await res.json();
//     console.log('async await', dat)
//     return dat
// }

// getCatFetch();


// const getCatInfo = async () => {
//     const resp = await fetch('https://catfact.ninja/fact', {
//         method: 'POST',
//         body: {},
//         headers: {}
//     });
// }
// other way

let getData = async () => {
    const response = await axios.get('https://catfact.ninja/fact')
    console.log('hey', response)
    console.log('demooooooo',response.request.responseURL)
    console.log('Async /away axios', response.data)
    return response.data
}
getData()


let loadData = async () => {
    let data = await getData()
    console.log(data)
    let newRow = `<tr><th scope='row'></th><td>${data.fact}</td></tr>`;
    document.getElementById("catbody").insertAdjacentHTML("afterbegin", newRow);
    

}

let clearData = () =>{
    document.getElementById('catbody').innerHTML = '';
}