const number = document.getElementById('number');
const code = document.getElementById('code');
const message = document.getElementById('message');
const button = document.getElementById('btn');

// Functions

function getAndAuthenticateTheValueFromAPI() {
    fetch(`https://verify.twilio.com/v2/Services/11ee94c5f103345dd1c2a9a765f875b0/Verifications`)
    .then(data => {
        console.log(data);
    })

};

// Event Listeners 

button.addEventListener('click', getAndAuthenticateTheValueFromAPI);