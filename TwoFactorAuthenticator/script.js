const number = document.getElementById('number');
const code = document.getElementById('code');
const message = document.getElementById('message');
const button = document.getElementById('btn');

// Functions

function getAndAuthenticateTheValueFromAPI() {
    fetch(`https://telesign-telesign-send-sms-verification-code-v1.p.rapidapi.com/sms-verification-code?verifyCode=%3${'text'}%3E&phoneNumber=%3${number}%3E`, {
	"method": "POST",
	"headers": {
		"x-rapidapi-key": "1d7de7be2fmsh4a5fc67c3c0f18bp1e8d9cjsnec3e13d3c796",
		"x-rapidapi-host": "telesign-telesign-send-sms-verification-code-v1.p.rapidapi.com"
	}
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
};

// Event Listeners 

button.addEventListener('click', getAndAuthenticateTheValueFromAPI);