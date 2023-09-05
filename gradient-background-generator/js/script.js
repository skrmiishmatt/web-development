var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var cssText = document.getElementById("csstext")
var clipboardButton = document.getElementById("clipboardbutton")

function setRandomColors() {
    color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
    color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);

    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.innerText = body.style.background;
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.innerText = body.style.background;
}

css.addEventListener('click', function () {
    text = cssText.innerHTML;
    try {
        navigator.clipboard.writeText(text);
        console.log('copied to clipboard');
    }
    catch {
        console.log('failed');
    }
})

clipboardButton.addEventListener('click', function () {
    text = cssText.innerHTML;
    try {
        navigator.clipboard.writeText(text);
        console.log('copied to clipboard');
        
        console.log(Math.floor(Math.random()*16777215).toString(16));
    }
    catch {
        console.log('failed');
    }
})


// Math.floor(Math.random()*16777215).toString(16);

setRandomColors();
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
