  
	var lives = 10;
	var letter = ["_ ","_ ","_ ","_ ","_ ","_ "];
    var z = ["_ ","_ ","_ ","_ ","_ ","_ "];

    document.onkeyup = function(event) {
        var userGuess = event.key;
        var word = "puzzle";

        //word[q]
    
        	for (var i = 0; i < word.length; i++) {

        		if (typeof stuff === 'undefined') {
        			var stuff = letter[0] + letter[1] + letter[2] + letter[3] + letter[4] + letter[5];
        		}
   
        		z[i] = stuff.substring((i * 2), (i * 2) + 2);
    
	        };

	        var y = 0;

	        for (var i = 0; i < word.length; i++) {

	        	if (word.indexOf(userGuess, i) === i) {
	        		letter[i] = userGuess + " ";
	        	}
	        	else {
	        		letter[i] = z[i];
	        		y++;
	        	}
	        };

	        if (y = word.length) {
	        	lives--;
	        };

	    stuff = letter[0] + letter[1] + letter[2] + letter[3] + letter[4] + letter[5];

       	var html = "<p>" + stuff + "</p><p>Lives: " + lives + "</p>";
       	document.querySelector("#game").innerHTML = html;


	    	//var t = 0

	        //for (var i = 0; i < word.length; i++) {
	  			//if (z[i] != "_ ") {
	  			//	t++;
	  			//}
	  		//}
	  		//if (t = word.length) {
	  		//	alert("You Win!");
	  		//}

    }
