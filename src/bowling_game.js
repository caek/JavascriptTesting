$(document).ready(function () {
	$("input").click(BowlingGame.pub_roll);	
});

var BowlingGame = function(){
	var total_score = 0;
	var pins = 0;
	var rolls = [];
	rolls.length = 20;
	var currentRoll = 0;

	var priv = {
		roll: function(pins) {
			rolls[currentRoll++] = pins;

		},	
		score: function() {
            var frameIndex = 0;
            var frame = 0;
			for(frame=0; frame < 10; frame++) {
                if (is_strike(frameIndex)) {
                    total_score += 10 + strike_bonus(frameIndex);
                    frameIndex++;
                }

			    if(is_spare(frameIndex)){
			        total_score += 10 + spare_bonus(frameIndex);
			        frameIndex += 2;
			    }
			    else{
			        if(is_defined(rolls[frameIndex + 1])){
			            total_score += sum_of_balls_in_frame(frameIndex);
				        frameIndex += 2;
			        }
			    }
			}
			set_frame_score(frame);
			set_total_score();
            return total_score;
		}
	}

	function is_spare(frameIndex) {
	    return rolls[frameIndex] + rolls[frameIndex + 1] == 10;
	}

	function is_strike(frameIndex) {
	    return rolls[frameIndex] == 10;
	}

    function sum_of_balls_in_frame(frameIndex) {
        return rolls[frameIndex]+rolls[frameIndex+1];
    }

    function spare_bonus(frameIndex) {
        return rolls[frameIndex + 2];
    }

    function strike_bonus(frameIndex) {
        return rolls[frameIndex+1]+rolls[frameIndex+2];
    }

	function is_defined(value){
	    return value != undefined;
	}

	function set_frame_score(frameIndex){
	    var frameScore = "frame" + frameIndex + "Score1";
        $('p.' + frameScore).text(pins);
	}

	function set_total_score(){
	    $('p.totalScore').text(total_score);
	}
	
	return {
		pub_roll: function() {
		    pins=Math.floor(Math.random()*11);
            priv.roll(pins);
            priv.score();
		},
        pub_score : function(){
            return priv.score();
        }
	};
}();






// BowlingGame.initialise = function() {
	// $("input").click(pub_roll);
// };

// BowlingGame.initialise(); 


// //singleton
// var BowlingGame = function() {
	// var priv = {
		// whatever: function() {
		// }
	// }
	
	// priv.whatever = function() {
	// }
		
	// return {
	  // public_function: function() {
		// hello;
		// priv.whatever();
	  // }
	// };
// }();

// //create instance
// var BowlingGame = function() {
	
// };

// var anInstance = BowlingGame();