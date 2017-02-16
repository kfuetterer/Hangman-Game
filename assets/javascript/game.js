

	var lives = 20;
	var wins = 0;
	var t = 0;
	var y = 6;
	var letter = ["_ ","_ ","_ ","_ ","_ ","_ "];
    var z = ["_ ","_ ","_ ","_ ","_ ","_ "];
    var q = 0;
    var guesses = "";

    
	window.onload = function() {
		var html = "<p>" + letter[0] + letter[1] + letter[2] + letter[3] + letter[4] + letter[5]; + "</p><p>Letters Guessed</p><p>" + "0" + "</p><p>Lives: " + lives + "</p><p>Wins: " + wins + "</p>";
	    document.querySelector("#game").innerHTML = html;
	}

    document.onkeyup = function Game(event) {
        var userGuess = event.key;
        var word = ["puzzle", "hobbit", "knight", "future", "potion", "newton"];

    		if (t === 6) {
	  			return;
    		};

    		if (lives === 0) {
    			return;
    		};

    		document.onkeyup;

        	for (var i = 0; i < word[q].length; i++) {
        		if (typeof stuff === 'undefined') {
        			var stuff = letter[0] + letter[1] + letter[2] + letter[3] + letter[4] + letter[5];
        			} z[i] = stuff.substring((i * 2), (i * 2) + 2);
	        };

	        for (var i = 0; i < word[q].length; i++) {
	        	if (word[q].indexOf(userGuess, i) === i) {
	        		letter[i] = userGuess + " ";
	        		t++;
	        		y--;
	        	} else {
	        		letter[i] = z[i];
	        	}
	        };

	  		if (y === 6) {
	        	lives--;
	        };

	    if (guesses === "") {
	    	guesses = userGuess.toUpperCase();
	    }
	    else {
	    	guesses = guesses + " " + userGuess.toUpperCase();
	    }

	    y = 6;

	    stuff = letter[0] + letter[1] + letter[2] + letter[3] + letter[4] + letter[5];

	    if (t === 6) {

	  		wins++;
	  		q++;
	  		t = 0;
			y = 6;
			letter = ["_ ","_ ","_ ","_ ","_ ","_ "];
			z = ["_ ","_ ","_ ","_ ","_ ","_ "];
			guesses = "";

		html = "<p>" + stuff + "</p><p>Letters Guessed</p><p>" + guesses + "</p><p>Lives: " + lives + "</p><p>Wins: " + wins + "</p>";
       	document.querySelector("#game").innerHTML = html;

	  	};

       	html = "<p>" + stuff + "</p><p>Letters Guessed</p><p>" + guesses + "</p><p>Lives: " + lives + "</p><p>Wins: " + wins + "</p>";
       	document.querySelector("#game").innerHTML = html;


	   		if (lives === 0) {
		  	var htmll = "<h2>Game Over</h2>";
		  	document.querySelector("#gameover").innerHTML = htmll;

		  	var htmlll = "<div style='text-align: center;'><button onclick='buttonPress()' style='border-radius: 12px; background-color: #ffffff; border-color: #bbbbbb; border-width: 2px; border-style: solid; color: #555555; font-size: 20px; padding: 15px 32px; font-family: 'Josephin Sans', sans-serif;'>Restart</button>";
       		document.querySelector("#button").innerHTML = htmlll;
       		}
    }

   // buttonPress() {

	//	lives = 20;
		//wins = 0;
	//	t = 0;
	//	y = 0;
	//	letter = ["_ ","_ ","_ ","_ ","_ ","_ "];
	//	z = ["_ ","_ ","_ ","_ ","_ ","_ "];
	//	q = 0; 
		//when button is pushed resetglobalvariables and run function again.
//	};



