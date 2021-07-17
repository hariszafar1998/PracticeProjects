const main = document.querySelector('.main');
const tiles = document.querySelectorAll('.row .tile');
const tile = document.getElementById('tiles');
const reset = document.getElementById('reset');
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

        if ( numberOfClicks % 2 == 0 ) {
            // console.log('even');
            e.target.innerText = "X";
        } else {
            e.target.innerText = "O";
        }
    }

    
});

function resetTheGame() {
    main.innerHTML = '<div class="row"><div class="tile" id="tiles"></div><div class="tile" id="tiles"></div><div class="tile" id="tiles"></div></div><div class="row" id="row">    <div class="tile" id="tiles"></div><div class="tile" id="tiles"></div><div class="tile" id="tiles"></div></div><div class="row" id="row"><div class="tile" id="tiles"></div><div class="tile" id="tiles"></div><div class="tile" id="tiles"></div></div>';
};

reset.addEventListener('click', resetTheGame);