// Get DOM elements
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');
const color5 = document.getElementById('color5');
const color1Code = document.getElementById('color1Code');
const color2Code = document.getElementById('color2Code');
const color3Code = document.getElementById('color3Code');
const color4Code = document.getElementById('color4Code');
const color5Code = document.getElementById('color5Code');
const mainContainer = document.getElementById('mainContainer');

function generateAndUpdateTheColors() {
    // Generate 5 random colors

    const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    // console.log(randomColor1);
    const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    // console.log(randomColor2);
    const randomColor3 = Math.floor(Math.random()*16777215).toString(16);
    // console.log(randomColor3);
    const randomColor4 = Math.floor(Math.random()*16777215).toString(16);
    // console.log(randomColor4);
    const randomColor5 = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor5);

    // Update the DIVs with randomly generated colors and also update the color code

    color1.style.background = `#${randomColor1}`;
    color1Code.innerText = randomColor1;
    color2.style.background = `#${randomColor2}`;
    color2Code.innerText = randomColor2;
    color3.style.background = `#${randomColor3}`;
    color3Code.innerText = randomColor3;
    color4.style.background = `#${randomColor4}`;
    color4Code.innerText = randomColor4;
    color5.style.background = `#${randomColor5}`;
    color5Code.innerText = randomColor5;
};

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        generateAndUpdateTheColors();
    }
}

color1.addEventListener('click', generateAndUpdateTheColors);
color2.addEventListener('click', generateAndUpdateTheColors);
color3.addEventListener('click', generateAndUpdateTheColors);
color4.addEventListener('click', generateAndUpdateTheColors);
color5.addEventListener('click', generateAndUpdateTheColors);