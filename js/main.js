;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	// first row variables
	var intervalFirst,
		startTimeFirst,
		$firstRowTimes,
		$amountFirst,
		$containerFirst;

	// second row variables
	var intervalSecond,
		startTimeSecond,
		$secondRowTimes,
		$amountSecond,
		$containerSecond;

	// third row variables
	var intervalThird,
		startTimeThird,
		$thirdRowTimes,
		$amountThird,
		$containerThird;

	$doc.ready(function() {
		setInterval(function() {
			displayTime($('#timer-zero'));
		}, 1000);

		// disables all stop buttons
		$(".timer-row .btn-stop").attr('disabled','disabled');

		// change color of timer when it's active
		$(".timer-row .btn-time").on("click", function() {
			$(this).parents(".timer-row").find(".timer-bar").removeClass("stop").addClass("active");
		});

		// change color of timer when it's stopped
		$(".timer-row .btn-stop").on("click", function() {
			$(this).parents(".timer-row").find(".timer-bar").removeClass("active").addClass("stop");
		});

		// start timer for table tennis when btn is pressed
    	$("#timer-row-first .btn-time").on("click", function(event) {
    		// assign all variables
			$amountFirst = $(this).text();
			$containerFirst = $("#timer-first");
			$firstRowTimes = $("#timer-row-first .btn-time");

			// assign to variable current time
			startTimeFirst = getCurrentTime();

			// check which button was pressed
			if ($amountFirst === "00:30") {
				$amountFirst = 1800;
			} else if ($amountFirst === "01:00") {
				$amountFirst = 3600;
			} else if ($amountFirst === "01:30") {
				$amountFirst = 5400;
			} else if ($amountFirst === "02:00") {
				$amountFirst = 7200;
			} else {
				alert("Error! Check buttons text!");
				$amountFirst = 0;
			}

		    // convert to milliseconds
	    	$amountFirst = $amountFirst * 1000;

    		// run timer function every 1 second
		    intervalFirst = setInterval(function() {
		    	timerFirst();
		    }, 1000);
	    	
	    	// enables stop button when timer is active
	    	$containerFirst.parents("#timer-row-first").find(".btn-stop").removeAttr('disabled');

		    event.preventDefault();
    	});

    	// stop first row timer
    	$("#timer-row-first .btn-stop").on("click", function() {
    		clearInterval(intervalFirst);
    		$firstRowTimes.removeAttr('disabled');
	    	$containerFirst.text("Stopped!");
	    	$(this).attr('disabled','disabled');
    	});

    	// start timer for playstation I when btn is pressed
    	$("#timer-row-second .btn-time").on("click", function(event) {
    		// assign all variables
			$amountSecond = $(this).text();
			$containerSecond = $("#timer-second");
			$secondRowTimes = $("#timer-row-second .btn-time");

			// assign to variable current time
			startTimeSecond = getCurrentTime();

			// check which button was pressed
			if ($amountSecond === "01:00") {
				$amountSecond = 3600;
			} else if ($amountSecond === "02:00") {
				$amountSecond = 7200;
			}  else if ($amountSecond === "03:00") {
				$amountSecond = 10800;
			} else {
				alert("Error! Check buttons text!");
				$amountSecond = 0;
			}

		    // convert to milliseconds
	    	$amountSecond = $amountSecond * 1000;

    		// run timer function every 1 second
		    intervalSecond = setInterval(function() {
		    	timerSecond();
		    }, 1000);
	    	
	    	// enables stop button when timer is active
	    	$containerSecond.parents("#timer-row-second").find(".btn-stop").removeAttr('disabled');

		    event.preventDefault();
    	});

    	// stop second row timer
    	$("#timer-row-second .btn-stop").on("click", function() {
    		clearInterval(intervalSecond);
    		$secondRowTimes.removeAttr('disabled');
	    	$containerSecond.text("Stopped!");
	    	$(this).attr('disabled','disabled');
    	});

    	// start timer for playstation II when btn is pressed
    	$("#timer-row-third .btn-time").on("click", function(event) {
    		// assign all variables
			$amountThird = $(this).text();
			$containerThird = $("#timer-third");
			$thirdRowTimes = $("#timer-row-third .btn-time");

			// assign to variable current time
			startTimeThird = getCurrentTime();

			// check which button was pressed
			if ($amountThird === "01:00") {
				$amountThird = 3600;
			} else if ($amountThird === "02:00") {
				$amountThird = 7200;
			}  else if ($amountThird === "03:00") {
				$amountThird = 10800;
			} else {
				alert("Error! Check buttons text!");
				$amountThird = 0;
			}

		    // convert to milliseconds
	    	$amountThird = $amountThird * 1000;

    		// run timer function every 1 second
		    intervalThird = setInterval(function() {
		    	timerThird();
		    }, 1000);

		    // enables stop button when timer is active
	    	$containerThird.parents("#timer-row-third").find(".btn-stop").removeAttr('disabled');

		    event.preventDefault();
    	});

    	// stop third row timer
    	$("#timer-row-third .btn-stop").on("click", function() {
    		clearInterval(intervalThird);
    		$thirdRowTimes.removeAttr('disabled');
	    	$containerThird.text("Stopped!");
	    	$(this).attr('disabled','disabled');
    	});
	});
    
    // getCurrentTime function definition - return current time
	function getCurrentTime() {
	  return ((new Date()).getTime());
	}

	var displayTime = function(container) {
		var now = new Date();
		var HH = (now.getHours() < 10) ? '0' + now.getHours() : now.getHours();
		var MM = (now.getMinutes() < 10) ? '0' + now.getMinutes() : now.getMinutes();
		var SS = (now.getSeconds() < 10) ? '0' + now.getSeconds() : now.getSeconds();
		var time = HH + ':' + MM + ':' + SS;
		
		$(container).text(time);
	};

	// first row timer function definition
    var timerFirst = function() {
	    var	hours,
	    	minutes,
	    	seconds,
	    	hoursElapsed,
			minutesElapsed,
			secondsElapsed,
	    	timeElapsed,
	    	timeLeft;

	    // disable all buttons while timer is active
	    $firstRowTimes.attr('disabled','disabled');

	    // check time every second and calculates in milliseconds elapsed time and time that is left
		timeElapsed = getCurrentTime() - startTimeFirst;
		timeLeft = $amountFirst - timeElapsed;

	    // convert hours, minutes and seconds
		hours = Math.floor(timeLeft / 1000 / 60 / 60 % 60);
		minutes = Math.floor(timeLeft / 1000 / 60 % 60);
		seconds = Math.round(timeLeft / 1000 % 60);
		hoursElapsed = Math.floor(timeElapsed / 1000 / 60 / 60 % 60);
		minutesElapsed = Math.floor(timeElapsed / 1000 / 60 % 60);
		secondsElapsed = Math.round(timeElapsed / 1000 % 60);

        // add 0 when hours, minutes or seconds are under 10
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        hoursElapsed = (hoursElapsed < 10) ? "0" + hoursElapsed : hoursElapsed;
        minutesElapsed = (minutesElapsed < 10) ? "0" + minutesElapsed : minutesElapsed;
        secondsElapsed = (secondsElapsed < 10) ? "0" + secondsElapsed : secondsElapsed;

        // display time
        $containerFirst.text(hoursElapsed + ":" + minutesElapsed + ":" + secondsElapsed + " / " + hours + ":" + minutes + ":" + seconds);
        
        // stop loop when countdown ends, display message, enable time buttons and disables stop button
      	if (timeLeft < 0) {
	    	$containerFirst.text("Game Over!");
	    	$containerFirst.parent().removeClass("active");
	    	$containerFirst.parent().removeClass("stop");
	    	clearInterval(intervalFirst);
            alert("Table Tennis: Game Over!");
	    	$firstRowTimes.removeAttr('disabled');
	    	$containerFirst.parents(".timer-row").find(".btn-stop").attr('disabled','disabled');
        }
    };

    // second row timer function definition
    var timerSecond = function() {
	    var	hours,
	    	minutes,
	    	seconds,
	    	hoursElapsed,
			minutesElapsed,
			secondsElapsed,
	    	timeElapsed,
	    	timeLeft;

	    // disable all buttons while timer is active
	    $secondRowTimes.attr('disabled','disabled');

	    // check time every second and calculates in milliseconds elapsed time and time that is left
		timeElapsed = getCurrentTime() - startTimeSecond;
		timeLeft = $amountSecond - timeElapsed;

	    // convert hours, minutes and seconds
		hours = Math.floor(timeLeft / 1000 / 60 / 60 % 60);
		minutes = Math.floor(timeLeft / 1000 / 60 % 60);
		seconds = Math.round(timeLeft / 1000 % 60);
		hoursElapsed = Math.floor(timeElapsed / 1000 / 60 / 60 % 60);
		minutesElapsed = Math.floor(timeElapsed / 1000 / 60 % 60);
		secondsElapsed = Math.round(timeElapsed / 1000 % 60);

        // add 0 when hours, minutes or seconds are under 10
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        hoursElapsed = (hoursElapsed < 10) ? "0" + hoursElapsed : hoursElapsed;
        minutesElapsed = (minutesElapsed < 10) ? "0" + minutesElapsed : minutesElapsed;
        secondsElapsed = (secondsElapsed < 10) ? "0" + secondsElapsed : secondsElapsed;

        // display time
        $containerSecond.text(hoursElapsed + ":" + minutesElapsed + ":" + secondsElapsed + " / " + hours + ":" + minutes + ":" + seconds);
        
        // stop loop when countdown ends, display message, enable time buttons and disables stop button
      	if (timeLeft < 0) {
	    	$containerSecond.text("Game Over!");
	    	$containerSecond.parent().removeClass("active");
	    	$containerSecond.parent().removeClass("stop");
	    	clearInterval(intervalSecond);
            alert("PlayStaion I: Game Over!");
	    	$secondRowTimes.removeAttr('disabled');
	    	$containerSecond.parents(".timer-row").find(".btn-stop").attr('disabled','disabled');
        }
    };

    // third row timer function definition
    var timerThird = function() {
	    var	hours,
	    	minutes,
	    	seconds,
	    	hoursElapsed,
			minutesElapsed,
			secondsElapsed,
	    	timeElapsed,
	    	timeLeft;

	    // disable all buttons while timer is active
	    $thirdRowTimes.attr('disabled','disabled');

	    // check time every second and calculates in milliseconds elapsed time and time that is left
		timeElapsed = getCurrentTime() - startTimeThird;
		timeLeft = $amountThird - timeElapsed;

	    // convert hours, minutes and seconds
		hours = Math.floor(timeLeft / 1000 / 60 / 60 % 60);
		minutes = Math.floor(timeLeft / 1000 / 60 % 60);
		seconds = Math.round(timeLeft / 1000 % 60);
		hoursElapsed = Math.floor(timeElapsed / 1000 / 60 / 60 % 60);
		minutesElapsed = Math.floor(timeElapsed / 1000 / 60 % 60);
		secondsElapsed = Math.round(timeElapsed / 1000 % 60);

        // add 0 when hours, minutes or seconds are under 10
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        hoursElapsed = (hoursElapsed < 10) ? "0" + hoursElapsed : hoursElapsed;
        minutesElapsed = (minutesElapsed < 10) ? "0" + minutesElapsed : minutesElapsed;
        secondsElapsed = (secondsElapsed < 10) ? "0" + secondsElapsed : secondsElapsed;

        // display time
        $containerThird.text(hoursElapsed + ":" + minutesElapsed + ":" + secondsElapsed + " / " + hours + ":" + minutes + ":" + seconds);
        
        // stop loop when countdown ends, display message, enable time buttons and disables stop button
      	if (timeLeft < 0) {
	    	$containerThird.text("Game Over!");
	    	$containerThird.parent().removeClass("active");
	    	$containerThird.parent().removeClass("stop");
	    	clearInterval(intervalThird);
            alert("PlayStaion II: Game Over!");
	    	$thirdRowTimes.removeAttr('disabled');
	    	$containerThird.parents(".timer-row").find(".btn-stop").attr('disabled','disabled');
        }
    };
})(jQuery, window, document);