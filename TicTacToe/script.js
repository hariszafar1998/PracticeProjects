const main = document.querySelector('.main');
const tile = document.querySelectorAll('.row .tile');
const reset = document.getElementById('reset');

let numberOfClicks = 0;

// function countClicks() {
//     const newNumberOfClicks = numberOfClicks + 1;
//     console.log(newNumberOfClicks);
// };

main.addEventListener('click', e => {
    if (e.target.classList.contains('tile')) {
        // const numberOfClicks = 0;
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

function erase() {
    tile.innerText = "";
};

reset.addEventListener('click', erase)