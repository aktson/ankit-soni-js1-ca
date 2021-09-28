//variables
const resultContainer = document.querySelector(".result");
const gifContainer = document.querySelector(".gif");


//get query string
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// url and headers 
const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`
const options = {"headers": {
	"x-rapidapi-key": "6b35597d87msh1ca61fd7e887893p13aa4ejsnb739ef9ca99c"
}};

// function for api call 
async function getData() {

		const fetchUrl = await fetch(url,options);
		const data = await fetchUrl.json();


        //function to remove gif
        const intervalId = setInterval(removeGif, 500);
        function removeGif () {
            gifContainer.classList.add("hidden");
            clearInterval(intervalId) 
        }
        
        createHtml(data);     
}
    
getData();


//function to create html
function createHtml(data) {

    resultContainer.innerHTML = 
    `<div class= "result">
        <h1>${data.title}</h1>
        <img src= "${data.screenshots[0].image}" alt = "${data.title}" >
        <p class = "description"><span>Description:</span> ${data.description}</p>
        <p class="success">Genre: ${data.genre}</p>  
    </div>`
}

