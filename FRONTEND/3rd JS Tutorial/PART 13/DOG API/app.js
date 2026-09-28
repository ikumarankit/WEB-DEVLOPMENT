let url = "https://dog.ceo/api/breeds/image/random";
let button = document.querySelector("button");

button.addEventListener("click", async()=>{
    let photoURL = await getPhoto();
    let img = document.querySelector("img");
    img.setAttribute("src", photoURL);
})

async function getPhoto(){
    try{
        let res = await axios.get(url);
        return res.data.message;
    } catch(err){
        return "/";
    }
}

