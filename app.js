const button = document.querySelector("#get-cat");

async function getCat(){
    const response =  await fetch("https://api.thecatapi.com/v1/images/search");
    const randomCat = await response.json();

    console.log(randomCat);
    document.querySelector("#cat-image").src = randomCat[0].url;
    document.querySelector("#width span").textContent = randomCat[0].width;
    document.querySelector("#height span").textContent = randomCat[0].height;
}

button.addEventListener("click", getCat);