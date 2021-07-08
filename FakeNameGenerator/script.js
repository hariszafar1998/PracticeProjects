const nameGet = document.getElementById('name');
const email_addressGet = document.getElementById('email-address');
const dobGet = document.getElementById('dob');
const addressGet = document.getElementById('address');
const numberGet = document.getElementById('number');
const submit = document.getElementById('submit');

// Function

async function getData() {
  const response = await fetch('https://randomuser.me/api/')
  const data = await response.json();

  console.log(data.results[0]);

  // console.log(data.results[0]);

  nameGet.innerText = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
  email_addressGet.innerText = `${data.results[0].email}`;
  dobGet.innerText = `${data.results[0].dob.date.substring(0, data.results[0].dob.date.length -14)}`;
  addressGet.innerText = `${data.results[0].location.street.number} ${data.results[0].location.street.name}, ${data.results[0].location.city},  ${data.results[0].location.postcode}, ${data.results[0].location.state}, ${data.results[0].location.country}`;
  numberGet.innerText = `${data.results[0].cell}`
};

getData();

// Event Listner
submit.addEventListener('click', getData);