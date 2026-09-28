let h1 = document.querySelector("h1");
// Here we see the pending state of the promise object 
function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve(`Color Changed to ${color}`);
        }, delay);
    });
};

changeColor("red", 1000)
.then((result)=>{
    console.log(result);
    console.log("Color1 changed");
    return changeColor("green", 1000);
})
.then((result)=>{
    console.log(result);
    console.log("Color2 changed");
    return changeColor("blue", 1000);
})
.then((result)=>{
    console.log(result);
    console.log("Color3 changed");
})