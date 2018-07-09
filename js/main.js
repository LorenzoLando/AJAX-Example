
var pageCounter = 1;
var animalContainer = document.getElementById("animal-info")
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){


	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
	//qui e dove facciamo qualcosa coi dati ottenuti in questo caso vogliamo il testo
	ourRequest.onload = function() {
		//JSON parse serve a far interpretare al browser il codice ottenuto come un JSON file
		var ourData = JSON.parse(ourRequest.responseText);
		//qui chiamo la funzione il cui lavoro e rendere html dai dati presi tramite ajax
		renderHTML(ourData);
	};

	ourRequest.onerror(function(){
		alert("OPPPPS that has been an error!");
	});

	//inviamo la richiesta una volta definita
	ourRequest.send();
	pageCounter++;
	if(pageCounter > 3) {
		btn.classList.add("hide-me");
	}

});


function renderHTML(data) {
	var htmlString  = "";
	
	for(i = 0; i < data.length; i++) {
		htmlString += "<p>" + data[i].name+ " is a " + data[i].species + " that likes to eat ";
		//siccome i likes sono in un array all`interno di un oggetto devo loopare di nuovo
		
		 for (ii = 0; ii < data[i].foods.likes.length; ii ++){
		 	if(ii === 0) {
		 		htmlString += data[i].foods.likes[ii];
		 	} else {
		 		htmlString += " and " + data[i].foods.likes[ii];
		 	}
		 }


		 htmlString += " and dislikes ";

		 //siccome i dislikes sono in un array all`interno di un oggetto devo loopare di nuovo
		
		 for (ii = 0; ii < data[i].foods.dislikes.length; ii ++){
		 	if(ii === 0) {
		 		htmlString += data[i].foods.dislikes[ii];
		 	} else {
		 		htmlString += " and " + data[i].foods.dislikes[ii];
		 	}
		 }


		htmlString += ".</p>";

}

	animalContainer.insertAdjacentHTML('beforeend', htmlString)

}


