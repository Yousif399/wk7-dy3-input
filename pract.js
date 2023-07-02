console.log(document);

console.log(document.getElementsByTagName('h1')[0].innerHTML)
// console.log(document.querySelector('#text1') seondary method querySEL)

setTimeout(() =>  {
    document.getElementById('text1').innerHTML =
    'this is chnged now BY JS WOOOW' },2000);



// 

let changeclr = () => {
    let head = document.getElementById('text1');

    !head.className ? head.className = 'color-change':
    head.className === 'color-change' ? head.className = 'color-change1':
    head.className === 'color-change1' ? head.className = 'color-change2':
    head.className = '' ;
    console.log(head.className)
}

let clr_bttn = document.getElementById('bttn');
console.log(clr_bttn);
clr_bttn.addEventListener('click', changeclr)



let newbtn = document.createElement('button');
newbtn.innerHTML = 'APIs button'
document.body.append(newbtn);

let addText= () =>{
    let newtext = document.createElement('h3');
    newtext.innerHTML = 'hello this is my APIS home work '
    document.body.append(newtext);
}
newbtn.addEventListener('mouseover', addText)



console.log(document.getElementsByTagName('button'));





let formSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    let fname = event.target[0].value;
    console.log(fname)
    let lname = event.target[1].value;
    console.log(lname)
    

    let fnameq = document.querySelector('#fname').value;
    console.log(fnameq)


    form.reset();

    let newtext = document.createElement('h3');
    newtext.innerHTML = fname + " " + lname;
    form.after(newtext);





}
let form = document.getElementById('nameform');
console.log(form);
form.addEventListener('submit', formSubmit)