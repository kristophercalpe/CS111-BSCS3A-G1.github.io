$(document).ready(function () {

	var trivia = [
		question01 = {
			question: "It is one of the ways to communicate with a computer. ",
			answers: ["A: Keyboard", "B: Monitor", "C: Mouse", "D: Speaker"],
			correctAnswer: 0,
		},
		question02 = {
			question: "It can take an image sent by a computer and deliver it onto a sheet of paper.",
			answers: ["A: Flash Drive ", "B: Printer", "C: Hard Disk", "D: Monitor"],
			correctAnswer: 1
		},
		question03 = {
			question: "It is a pointing device that we use to move the cursor on the screen.",
			answers: ["A: Tower Case", "B: Monitor", "C: Mouse", "D: Mother Board"],
			correctAnswer: 2
		},
		question04 = {
			question: "It is used to take photos and videos. ",
			answers: ["A: Cellphone", "B: Tablet", "C: Projector", "D: Web Camera"],
			correctAnswer: 3,
		},
		question05 = {
			question: "This is the component that converts power from the wall outlet to one that the computer needs.",
			answers: ["A: Power Supply Unit", "B: CPU", "C: RAM", "D: Fans"],
			correctAnswer: 0,
		},
		question06 = {
			question: "It is the brain of the computer where all data crunching and processing is done.",
			answers: ["A: Monitor", "B: CPU", "c: GPU", "D: Hard Disk"],
			correctAnswer: 1,
		},
		question07 = {
			question: "It convert electronic signals into sounds that are audible to humans.",
			answers: ["A: Microphone", "B: RAM", "C: speaker", "D: Monitor"],
			correctAnswer: 2,
		},
		question08 = {
			question: "It is the heart and biggest circuit board on the computer.",
			answers: ["A: CPU", "B: Keyboard", "C: Monitor", "D: Mother Board"],
			correctAnswer: 3
		},
		question09 = {
			question: "It is where data is permanently stored.",
			answers: ["A: Hard Disk", "B: CPU", "C: RAM", "D: Monitor"],
			correctAnswer: 0
		},
		question10 = {
			question: "It is also used for data storage, but temporarily.",
			answers: ["A: CPU", "B: RAM", "C: Flash Drive", "D: Mouse"],
			correctAnswer: 1
		},
		question11 = {
			question: "What do you call a portable computer?",
			answers: ["A: Bookshop", "B: CPU", "C: Laptop", "D: Desktop"],
			correctAnswer: 2
		},
		question12 = {
			question: "What are the REAL Anti-Virus software programs?",
			answers: ["A: Internet Explorer", "B: McFee", "C: Microsoft", "D: Norton"],
			correctAnswer: 3
		},
		question13 = {
			question: "What memory below is the largest?",
			answers: ["A: 1TB", "B: 1GB", "C: 10GB", "D: 5000bytes"],
			correctAnswer: 0
		},
		question14 = {
			question: "What is the most used search engine?",
			answers: ["A: Yahoo", "B: Google", "C: Bing", "D: Yahoo"],
			correctAnswer: 1
		},
		question15 = {
			question: "Who is known as the father of computers?",
			answers: ["A: Charles Darwin", "B: Albert Einstein", "C: Charles Babbage", "D: Kristopher Calpe"],
			correctAnswer: 2
		},
		question16 = {
			question: "What is the name of Apple's desktop operating system?",
			answers: ["A: Windows", "B: Android", "C: Mac OS", "D: software"],
			correctAnswer: 2
		},
		question17 = {
			question: "'.xls' is a file extension used in which application?",
			answers: ["A: Power Point", "B: Word", "C: MS Excel", "D: Notepad"],
			correctAnswer: 2
		},
		question18 = {
			question: "'VLC media player' and 'Windows media player' are what type of programs?",
			answers: ["A: Documents", "B: Downloads", "C: Multimedia", "D: Files"],
			correctAnswer: 2
		},
		question19 = {
			question: "What type of device is a computer monitor?",
			answers: ["A: Input", "B: Output", "C: Software", "D: Storage"],
			correctAnswer: 1
		},
		question20 = {
			question: "Of the 4 words listed below, which one does NOT belong?",
			answers: ["A: Applications", "B: Programs", "C: Peripherals", "D: Software"],
			correctAnswer: 2
		},
		question21 = {
			question: "The term _______ refers to the computer's physical components, such as the monitor, keyboard, memory chips, and hard drive.",
			answers: ["A: Hardware", "B: Input", "C: Firmware", "D: Output"],
			correctAnswer: 0
		}];
		
	var audienceAnswers = ['A: 64%  B:  17%  C: 9%  D: 10%', 'A: 14%  B:  36%  C: 27%  D: 23%', 'A: 14%  B:  2%  C: 49%  D: 12%', 'A: 17%  B: 16%  C: 34%  D: 43%']
	var phoneAnswers = ['Sup dude. Uh, the answer is A. I mean ', "Hello Dear, I don't understand the question. But I think it's ", "How long do I have to tell you an answer? It's... ", 'I know this one. It is ', "I'm just guessing, but I think it's "]
	var questionValue = [100, 1000, 5000, 10000, 30000, 50000, 125000, 250000, 500000, 1000000]
	var lettersKey = ['A', 'B', 'C', 'D'];
	var timer = 20;
	var gameStart = false;
	var difficulty = 1;
	var nextQuestion = true;
	var questionNumber = 0;
	var currentAnswer;
	var money = 0;
	var clockIsRunning = false;
	var buttonAIsOn = false;
	var buttonBIsOn = false;
	var buttonCIsOn = false;
	var buttonDIsOn = false;
	var mainTheme = new Audio("assets/audio/main_theme.mp3");
	var selectButton = new Audio("assets/audio/select_button.mp3");
	var wrongButton = new Audio("assets/audio/wrong_button.mp3");
	var wonMillion = new Audio("assets/audio/won_million.mp3");
	var musicOne = new Audio("assets/audio/music_01.mp3");
	var musicTwo = new Audio("assets/audio/music_02.mp3");
	var musicThree = new Audio("assets/audio/music_03.mp3");
	var phoneRing = new Audio("assets/audio/phone_ring.mp3");
	var letsPlay = new Audio("assets/audio/lets_play.mp3");
	var fiftyFiftyOn = false;
	var phoneFriend = false;
	var audienceHelp = false;


	mainTheme.play();


	function startTrivia() {
		if (gameStart === false) {
			mainTheme.pause();
			musicOne.currentTime = 0;
			musicTwo.currentTime = 0;
			musicThree.currentTime = 0;
			buttonIsOn();
			fiftyFiftyOn = true;
			phoneFriend = true;
			audienceHelp = true;
			gameStart = true;
			questionNumber = 0;
			shuffle(trivia);
			$('.money-bar').removeClass('current-money');
			$('#money01').addClass('current-money');
			reset();
			lifelineSwitch();
			run();
			startClock();
			generateQuestion();
			console.log("game start is " + gameStart);
			console.log("question number is " + questionNumber);
		} else {
			console.log('start button didnt work')
		}
	}

	$('#start-button').on("click", function () {
		startTrivia();
	});

	function run() {
		intervalId = setInterval(startClock, 1000);
	}

	//starts the timer
	function startClock() {
		timer--;
		if (timer > 9) {
			$('#game-timer').html(":" + timer);
		}
		else {
			$('#game-timer').html(":0" + timer);
		}
		// console.log(timer);
		clockIsRunning = true;
		if (timer === 0) {
			stop();
			gameLose();

		}
	}


	function stop() {
		clearInterval(intervalId);
		clockIsRunning = false;
	}

	function reset() {
		timer = 31;
		$("#display").text(":00");
		var col = document.getElementById("message");
		col.style.backgroundColor = "#fff";
		col.style.color = "black";
	}

	function changeMusic() {
		if (gameStart === true) {
			if (questionNumber < 5) {
				musicOne.play();
			} else if (questionNumber >= 5 && questionNumber < 8) {
				musicTwo.play();
				musicOne.pause();
			} else if (questionNumber > 7) {
				musicThree.play();
				musicTwo.pause();
			}
		} else {
			musicOne.pause();
			musicTwo.pause();
			musicThree.pause();
		}
	};

	function calculateMoney() {
		money = questionValue[questionNumber];
		console.log("total money is " + money);
		if (questionNumber === 1) {
			$('#money01').removeClass('current-money');
			$('#money02').addClass('current-money');
		}
		else if (questionNumber === 2) {
			$('#money02').removeClass('current-money');
			$('#money03').addClass('current-money');
		}
		else if (questionNumber === 3) {
			$('#money03').removeClass('current-money');
			$('#money04').addClass('current-money');
		}
		else if (questionNumber === 4) {
			$('#money04').removeClass('current-money');
			$('#money05').addClass('current-money');
		}
		else if (questionNumber === 5) {
			$('#money05').removeClass('current-money');
			$('#money06').addClass('current-money');
		}
		else if (questionNumber === 6) {
			$('#money06').removeClass('current-money');
			$('#money07').addClass('current-money');
		}
		else if (questionNumber === 7) {
			$('#money07').removeClass('current-money');
			$('#money08').addClass('current-money');
		}
		else if (questionNumber === 8) {
			$('#money08').removeClass('current-money');
			$('#money09').addClass('current-money');
		}
		else if (questionNumber === 9) {
			$('#money09').removeClass('current-money');
			$('#money10').addClass('current-money');
			gameWin();
		}
		else {
		}
	}

	function gameLose() {
		stop();

		musicOne.pause();
		musicTwo.pause();
		musicThree.pause();
		letsPlay.play();
		fiftyFiftyOn = false;
		phoneFriend = false;
		audienceHelp = false;
		gameStart = false;
		$('.message').text("GAME OVER!");
		var col = document.getElementById("message");
		col.style.backgroundColor = "red";
		col.style.color = "white";
		col.style.paddingTop = "5px";
		console.log("You Lose!");
	}

	function gameWin() {
		musicOne.pause();
		musicTwo.pause();
		musicThree.pause();
		wonMillion.play();
		fiftyFiftyOn = false;
		phoneFriend = false;
		audienceHelp = false;
		stop();
		gameStart = false;
		$('.message').text("You're a real Programmer!");
		console.log("You Win!");
	}

	function buttonIsOn() {
		buttonAIsOn = true;
		buttonBIsOn = true;
		buttonCIsOn = true;
		buttonDIsOn = true;
		console.log('button a is ' + buttonAIsOn);
		console.log('button b is ' + buttonBIsOn);
		console.log('button c is ' + buttonCIsOn);
		console.log('button d is ' + buttonDIsOn);
		$('#answerA').removeClass('disabled');
		$('#answerB').removeClass('disabled');
		$('#answerC').removeClass('disabled');
		$('#answerD').removeClass('disabled');
	}

	function shuffle(array) {
		var currentIndex = trivia.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}
	// generateQuestion();
	function generateQuestion() {
		if (gameStart === true) {
			$('.message').empty();
			changeMusic();
			$('#question').text(trivia[questionNumber].question);
			$('#answerA').text(trivia[questionNumber].answers[0]);
			$('#answerB').text(trivia[questionNumber].answers[1]);
			$('#answerC').text(trivia[questionNumber].answers[2]);
			$('#answerD').text(trivia[questionNumber].answers[3]);
			currentAnswer = trivia[questionNumber].correctAnswer;
			console.log("current answer is " + currentAnswer);
		} else {
			console.log("game is over");
		}
	}


	$("#answerA").on("click", function () {
		if (gameStart === false) {
			console.log("nothing")
		}
		else if (gameStart === true && currentAnswer === 0 && buttonAIsOn === true) {
			selectButton.play();
			buttonIsOn();
			questionNumber++;
			console.log('Q # is ' + questionNumber);
			reset();
			calculateMoney();
			generateQuestion();
		} else {
			wrongButton.play();
			gameLose();
			console.log("game loss from answerA");
			console.log("gameStart is " + gameStart);
			console.log("current answer is " + currentAnswer);
			console.log("button a is on is " + buttonAIsOn);
		}
	});

	$("#answerB").on("click", function () {
		if (gameStart === false) {
			console.log("nothing")
		}
		else if (gameStart === true && currentAnswer === 1 && buttonBIsOn === true) {
			questionNumber++;
			console.log('q # is ' + questionNumber);
			buttonIsOn();
			selectButton.play();
			reset();
			calculateMoney();
			generateQuestion();
		} else {
			wrongButton.play();
			gameLose();
			console.log("game loss from answerB");
		}
	});

	$("#answerC").on("click", function () {
		if (gameStart === false) {
			console.log("nothing")
		}
		else if (gameStart === true && currentAnswer === 2 && buttonCIsOn === true) {
			questionNumber++;
			console.log('q # is ' + questionNumber);
			buttonIsOn();
			selectButton.play();
			calculateMoney();
			generateQuestion();
			reset();
		} else {
			wrongButton.play();
			gameLose();
			console.log("game loss from answerC");
		}
	});

	$("#answerD").on("click", function () {
		if (gameStart === false) {
			console.log("nothing")
		}
		else if (gameStart === true && currentAnswer === 3 && buttonDIsOn === true) {
			questionNumber++;
			console.log('q # is ' + questionNumber);
			buttonIsOn();
			selectButton.play();
			calculateMoney();
			generateQuestion();
			reset();
		} else {
			wrongButton.play();
			gameLose();
			console.log("game loss from answerD");
		}
	});

	//These are the three lifeline buttons
	//5050, call a friend, and audience

	$("#fifty").on("click", function () {
		if (fiftyFiftyOn === true) {
			console.log('button fifty was pressed');
			selectButton.play();
			fiftyFiftyOn = false;
			lifelineSwitch();
			//play sound
			//display 5050 screen
			if (currentAnswer === 0) {
				buttonDIsOn = false;
				$('#answerD').addClass('disabled');
				$('#answerB').addClass('disabled');
				buttonBIsOn = false;
				// disable button b and d
			} else if (currentAnswer === 1) {
				buttonAIsOn = false;
				$('#answerA').addClass('disabled');
				$('#answerC').addClass('disabled');
				buttonCIsOn = false;
				//disable button a and c
			} else if (currentAnswer === 2) {
				//disable a and b
				buttonAIsOn = false;
				$('#answerA').addClass('disabled');
				buttonBIsOn = false;
				$('#answerB').addClass('disabled');
			} else {
				//disable b & c
				buttonBIsOn = false;
				$('#answerB').addClass('disabled');
				buttonCIsOn = false;
				$('#answerC').addClass('disabled');
			}
		} else {
			console.log("5050 button doesn't work");
		}
	});

	function randomPhoneAnswerGenerator() {
		var randomphoneAnswer = phoneAnswers[Math.floor(Math.random() * phoneAnswers.length)];
		$('.message').text(randomphoneAnswer + lettersKey[currentAnswer]);
	}

	function phoneAFriend() {
		phoneRing.play();
		setTimeout(randomPhoneAnswerGenerator, 2000);
	}

	function audienceForHelp() {
		// var randomAudienceAnswer = audienceAnswers[Math.floor(Math.random() * audienceAnswers.length)];
		$('.message').text(audienceAnswers[currentAnswer]);

	}

	$("#friend").on("click", function () {
		if (phoneFriend === true) {
			console.log('button friend was pressed');
			reset();
			phoneFriend = false;
			lifelineSwitch();
			selectButton.play();
			phoneAFriend();
		} else {
			console.log("friend button doesn't work");
		}
	});


	$("#audience").on("click", function () {
		if (audienceHelp === true) {
			console.log('button audience was pressed');
			selectButton.play();
			audienceHelp = false;
			lifelineSwitch();
			audienceForHelp();
		} else {
			console.log("audience button doesn't work");
		}

	});

	function lifelineSwitch() {
		if (fiftyFiftyOn === false) {
			$('#fifty').addClass('disabled');
		} else {
			$('#fifty').removeClass('disabled');
		}
		if (phoneFriend === false) {
			$('#friend').addClass('disabled');
		} else {
			$('#friend').removeClass('disabled');
		}
		if (audienceHelp === false) {
			$('#audience').addClass('disabled');
		} else {
			$('#audience').removeClass('disabled');
		}
	}

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal
	btn.onclick = function () {
		modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function () {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}


});
