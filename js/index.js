
// //global varialbles
const divContainer = document.querySelector(".container");
const errorContainer = document.querySelector(".error-container");
const gifContainer = document.querySelector(".gif");

//url and headers from rapidapi
const url = `https://free-to-play-games-database.p.rapidapi.com/api/games`;
const options = {"headers": {
	"x-rapidapi-key": "6b35597d87msh1ca61fd7e887893p13aa4ejsnb739ef9ca99c"
}};


// function for api call 
async function getData() {
	
	try {
		const fetchUrl = await fetch(url,options);
		const data = await fetchUrl.json();
		
		divContainer.innerHTML = "";

		const intervalId = setInterval(removeGif, 1000);
		//function to remove loading gif after 
		function removeGif() {

			gifContainer.classList.add("hidden");
			
			// looping through received data
			for (let i= 0; i <= data.length; i++) {
			
			if(i === 50) break;
			const receivedData = data[i];
			createHtml(receivedData);
			clearInterval(intervalId)	
			}
		}
	}
	catch(error) {
		errorContainer.innerHTML = showError(`Opps...Something went wrong ${error}`);
	}	
}

// calling api call function
getData();

//function to create HTML
function createHtml(data) {
	
	divContainer.innerHTML += 
	`<div>
		<a href="/detail.html?id=${data.id}" class= "a-tags">
		<img src="${data.thumbnail}">
		<h2>${data.title}</h2>
		<p>Platform: ${data.platform}</p>
		<date>Release Date: ${data.release_date}</date>
		</a>
	</div>`
}

//function to show error
function showError (msg="Unknown error") {
	
	return `<p class = "error">${msg}</p>`
}


