let loadData = async () => {
    response = await getData()
    if (response.status === 200) {
        data = response.data
        console.log('data', data)
        let newRow = `<div class="card" style="width: 18rem;"><div class="card-body"><h2 id="name" class="card-title"> ${data.name} </h2></div><img src="${data.sprites.front_default}"  class="card-img-top" alt=""> </img></div>`;
        // let newRow = `<tr><th scope='row'></th><td>${data.name} <img src="${data.sprites.front_default}" alt=""></td></tr>`;
        document.getElementById('pokBody').insertAdjacentHTML('afterbegin', newRow)
    } else {
        alert(console.log('input is invalid'))
    }
}

let getData = async () => {
    let input1 = document.getElementById('inputText').value
    let input = input1.toLowerCase();

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
    // console.log('response', response.data)
    // console.log('this is name', response.data.name)
    // console.log('this is the img', response.data.sprites.front_default )
    // console.log('ths is data', response.data)
    return response
}



let clearData = () =>{
    document.getElementById('pokBody').innerHTML = '';
}





