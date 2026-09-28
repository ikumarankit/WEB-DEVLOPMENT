let btn = document.querySelector("button");

function generateRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}

btn.addEventListener("click", function(){
    let h1 = document.querySelector("h1");
    let randomColor = generateRandomColor();
    h1.innerText = randomColor;

    let div = document.querySelector(".innerDiv");
    div.style.backgroundColor =  randomColor;
    console.log("Color Updated");
});