  
	var lives = 20;
	var wins = 0;
	var t = 0;
	var y = 0;
	var letter = ["_ ","_ ","_ ","_ ","_ ","_ "];
    var z = ["_ ","_ ","_ ","_ ","_ ","_ "];

    document.onkeyup = function(event) {
        var userGuess = event.key;
        var word = ["puzzle", "hobbit", "knight", "future", "potion", "newton", "random", "abacus"];
        var q = 0;
    
        	for (var i = 0; i < word[q].length; i++) {
        		if (typeof stuff === 'undefined') {
        			var stuff = letter[0] + letter[1] + letter[2] + letter[3] + letter[4] + letter[5];
        			} z[i] = stuff.substring((i * 2), (i * 2) + 2);
	        };

	        for (var i = 0; i < word.length; i++) {
	        	if (word[q].indexOf(userGuess, i) === i) {
	        		letter[i] = userGuess + " ";
	        	} else {
	        		letter[i] = z[i];
	        		y++;
	        	}
	        };

	  		if (y = word.length) {
	        	lives--;
	        };

	    stuff = letter[0] + letter[1] + letter[2] + letter[3] + letter[4] + letter[5];

       	var html = "<p>" + stuff + "</p><p>Letters Guessed: " + userGuess.toUpperCase() + "</p><p>Lives: " + lives + "</p><p>Wins: " + wins + "</p>";
       	document.querySelector("#game").innerHTML = html;

	        for (var i = 0; i < word[q].length; i++) {
	  			if (z[i] != "_ ") {
	  				t++;
	  			}
	  		}
	  		if (t = word[q].length) {
	  			q++;
	  			wins++;
	  		}

	  		function ResetGlobalVariables() {
				var lives = 20;
				var wins = 0;
				var t = 0;
				var y = 0;
				var letter = ["_ ","_ ","_ ","_ ","_ ","_ "];
			    var z = ["_ ","_ ","_ ","_ ","_ ","_ "];	
		    }

		 	if (lives === 0) {
		  		var htmll = "<h2>Game Over</h2>";
		  		document.querySelector("#gameover").innerHTML = htmll;

		  		var htmlll = "<div style='text-align: center;'><button style='border-radius: 12px; background-color: #ffffff; border-color: #bbbbbb; border-width: 2px; border-style: solid; color: #555555; font-size: 20px; padding: 15px 32px; font-family: 'Josephin Sans', sans-serif;'>Restart</button>"
       			document.querySelector("#button").innerHTML = htmlll;
		  	}

		  	ResetGlobalVariables();
		  	//when button is pushed resetglobalvariables and run function again.
    }


