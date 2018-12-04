	const imageBody = document.getElementById('image');
	const answerPanel = document.getElementById('answer_panel');
	const guessWord = document.getElementById('guess_word');
	const submitAnswer = document.getElementById('submit_answer');
	const list = document.getElementById('list-data');
	const tags = 
	['dog', 'cat', 'car', 'food', 'rabbit', 'bicycle', 'drink', 'shoe', 'shirt', 'pants', 'house', 'phone', 'motorbike', 'hot spring', 'academy', 'nature', 'vocation', 'duck', 'chicken', 'bird', 'mountain', 'activity'];

	function newArray(choices) {
	    for(let i = 0; newChoices.length < 4; i++) {
	    	let random = Math.floor(Math.random() * (choices.length - 1));
			let option = choices[random];
	        if(newChoices.includes(option) == false) {
	            newChoices.push(option);
	        } 
	    } return newChoices	
	}

	function randomColor() {
		const r = Math.floor(Math.random() * 255);
		const g = Math.floor(Math.random() * 255);
		const b = Math.floor(Math.random() * 255);
		return 'rgb(' + r + ',' + g + ',' + b + ')'
	}

	function reset() {
		newChoices = [];
		guessWord.innerHTML = '';
		list.innerHTML = '';
		answer_tag_array = newArray(tags);
		page_load(answer_tag_array);
		getTag(answer_tag_array);
		getApi(tag);
	}

	function getTag(answerTagArray) {
		let random = Math.floor(Math.random() * (answerTagArray.length - 1));	
		tag = answerTagArray[random];
	}

	submitAnswer.onclick = function(event){
		let selectedAnswer = event.target.innerHTML;
		if (selectedAnswer == tag) {
			alert('Correct!');
			reset();
		} else {
			alert('Please try again!')
		} 
	}

	function page_load(newGuess){
		for(let count = 0; count < 4; count++){
			let answer = newGuess[count];
			let word = document.createElement('list');
			word.innerHTML = answer;
			word.classList.add('word');
			word.classList.add('answer');
			word.style.backgroundColor = randomColor();
			guessWord.appendChild(word);
		}
	}

	function getApi(guesssingTag){
		const tumblr = fetch('https://api.tumblr.com/v2/tagged?tag=' + guesssingTag + '&api_key=VKBb4zcZM4XNLCtOabK90TteBQWEf9o6EVDjeLYUGOfA70SyQU')
		.then(function(response){
			return response.json();
		})
		.then(function(result){
			
			// clear list
			list.innerHTML = '';

			let items =result.response;
			let masonry;

			// for each item, add image to list
			for(let i=0; i < items.length; i++){
				const item = items[i];
			 	if(item.photos != undefined){
			 		// create li and img to append
					let altSizes = item.photos[0].alt_sizes;
					let imgSrc = altSizes[altSizes.length - 3].url;
					let img = document.createElement('img');
					img.src = imgSrc;
					img.onload = function(){
						masonry.layout();
					}				
					let li = document.createElement('li');
					li.appendChild(img);
					list.appendChild(li);
				}
			}

			// initialize masonry after list has loaded
			masonry = new Masonry(list, {
				itemSelector: 'li',
			});

			//run layout
			masonry.layout();
		 }) 
	}

	let newChoices = [];
	let answer_tag_array = newArray(tags);
	page_load(answer_tag_array);
	getTag(answer_tag_array);
