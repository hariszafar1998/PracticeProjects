const main = document.querySelector('.main');
const tile = document.querySelectorAll('.row .tile');
const reset = document.getElementById('reset');
const tile2 = document.getElementsByClassName('tile');
const row = document.getElementsByClassName('row');

let numberOfClicks = 0;

// function countClicks() {
//     const newNumberOfClicks = numberOfClicks + 1;
//     console.log(newNumberOfClicks);
// };

main.addEventListener('click', e => {
    if (e.target.classList.contains('tile') && !e.target.classList.contains('clicked')) {
        // const numberOfClicks = 0;
        e.target.classList.add('clicked');
        numberOfClicks = numberOfClicks + 1;
        // console.log(numberOfClicks);
    }

    if ( numberOfClicks % 2 == 0 ) {
        // console.log('even');
        e.target.innerText = "X";
    } else {
        e.target.innerText = "O";
    }
});

function resetTheGame() {
    tile2.innerText = "";
};

reset.addEventListener('click', resetTheGame);