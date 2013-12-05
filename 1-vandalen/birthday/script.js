"use strict";

window.onload = function(){

	
    var birthday = function (date) {
        //Kontrollerar att datumet är i rätt format.
	    if (date.match(/^\d\d\d\d-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2]\d)|(3[0-1]))$/) === null) {
	        throw new Error('Vänligen ange datum i formatet MM-DD-YYYY.');
	    }
        //Skapar datumet och kontorllerar att det finns.
	    var currentDate = new Date();
	    var birthday = new Date(date + 'T23:59:59');
	    if (isNaN(birthday.getTime())) {
	        throw new Error('Datumet existerar inte.');
	    }
	    birthday.setFullYear(currentDate.getFullYear());
	    if (birthday.getTime() - currentDate.getTime() < 0) {
	        birthday.setFullYear(currentDate.getFullYear() + 1);
	    }
        //Räknar ut antalet dagar kvar och skickar resultatet.
	    return Math.floor((birthday.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
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
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};