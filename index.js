document.title = "Assessment Card"


let url = "https://randomuser.me/api/"
let image = document.querySelector("#image")
let names = document.getElementById('fullname') 
let number = document.querySelector('#num')
let email = document.querySelector('#email')
let address = document.querySelector('#address')
let button = document.querySelector('#button')
 
const getDetails =() =>{
    fetch(url).then(response =>{
        return response.json();
        }).then(data =>{
    image.src = data.results[0].picture.large;
    names.textContent = `Full Name: ${data.results[0].name.first}  ${data.results[0].name.last}`;
    number.textContent = `Phone Number: ${data.results[0].phone}`;
    email.textContent = `Email Address: ${data.results[0].email}`;
    address.textContent = `Home Address: ${data.results[0].location.street.number + ','}  ${data.results[0].location.street.name}  ${data.results[0].location.city} ${data.results[0].location.country}`
})

}
button.addEventListener('click',getDetails)


