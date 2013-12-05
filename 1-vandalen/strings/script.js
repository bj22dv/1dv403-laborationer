"use strict";

window.onload = function(){

	var convertString = function(str){
	//Kontrollerar att text är angiven.
	    if (str === '') {
	        throw new Error('Fel! Vänligen ange en text att omvandla.');
	    }

	    var myString = '';
        //Ändrar stora bokstäver till små och små till stora.
	    for (var i = 0; i < str.length; i++) {
	        var char = str[i].toUpperCase();
	        if (char !== str[i]) {
	            myString += char;
	        } else {
	            myString += char.toLowerCase();
	        }
	    }
        //Byter ut a och A mot #.
	    myString = myString.replace(/a/gi, '#');

	    return myString;
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};