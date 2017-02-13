  
	var lives = 10;

    document.onkeyup = function(event) {
        var userGuess = event.key;
        var letter = ["1","2","3","4","5","6"];
        var word = "puzzle";

	        for (var i=0; i < word.length; i++) {

	        	if (word.indexOf(userGuess, i) === i) {
	        		letter[i] = userGuess + " ";
	        	}
	        	else {
	        		letter[i] = "_ ";
	        	}
	        };

       	var html = "<p>" + letter[0] + letter[1] + letter[2] + letter[3] + letter[4] + letter[5] + "</p><p>Lives: " + lives + "</p>";
       	document.querySelector("#game").innerHTML = html;
    }