		function fillBox(elem,symbol){
		let input = elem;
		input.innerHTML = symbol;	
	}

	let player = true;
	function givePlayerSymbol(){
		if (player == true) {
			return "X";
		} else {
			return "O";
		}
	}

	function switchPlayer(){
		player = !player
	}
	
	function reset() {
		for(let i = 0; i < 9; i++){
			document.getElementsByClassName('box')[i].innerHTML = "";
			count = 0;
			player = true;
		}
	}

	function checkWin() {
		if (document.getElementsByClassName('box')[0].innerHTML == document.getElementsByClassName('box')[1].innerHTML && document.getElementsByClassName('box')[1].innerHTML == document.getElementsByClassName('box')[2].innerHTML && document.getElementsByClassName('box')[0].innerHTML != "") {
			return true
		} else if (document.getElementsByClassName('box')[3].innerHTML == document.getElementsByClassName('box')[4].innerHTML && document.getElementsByClassName('box')[4].innerHTML == document.getElementsByClassName('box')[5].innerHTML && document.getElementsByClassName('box')[3].innerHTML != "") {
			return true
		} else if (document.getElementsByClassName('box')[6].innerHTML == document.getElementsByClassName('box')[7].innerHTML && document.getElementsByClassName('box')[7].innerHTML == document.getElementsByClassName('box')[8].innerHTML && document.getElementsByClassName('box')[6].innerHTML != "") {
			return true
		} else if (document.getElementsByClassName('box')[0].innerHTML == document.getElementsByClassName('box')[3].innerHTML && document.getElementsByClassName('box')[3].innerHTML == document.getElementsByClassName('box')[6].innerHTML && document.getElementsByClassName('box')[0].innerHTML != "") {
			return true
		} else if (document.getElementsByClassName('box')[1].innerHTML == document.getElementsByClassName('box')[4].innerHTML && document.getElementsByClassName('box')[4].innerHTML == document.getElementsByClassName('box')[7].innerHTML && document.getElementsByClassName('box')[1].innerHTML != "") {
			return true
		} else if (document.getElementsByClassName('box')[2].innerHTML == document.getElementsByClassName('box')[5].innerHTML && document.getElementsByClassName('box')[5].innerHTML == document.getElementsByClassName('box')[8].innerHTML && document.getElementsByClassName('box')[2].innerHTML != "") {
			return true
		} else if (document.getElementsByClassName('box')[0].innerHTML == document.getElementsByClassName('box')[4].innerHTML && document.getElementsByClassName('box')[4].innerHTML == document.getElementsByClassName('box')[8].innerHTML && document.getElementsByClassName('box')[4].innerHTML != "") {
			return true
		} else if (document.getElementsByClassName('box')[2].innerHTML == document.getElementsByClassName('box')[4].innerHTML && document.getElementsByClassName('box')[4].innerHTML == document.getElementsByClassName('box')[6].innerHTML && document.getElementsByClassName('box')[4].innerHTML != "") {
			return true
		} else {
			return false
		}
	}	
	
	let count = 0;
	let player_1_winCount = 0;
	let player_2_winCount = 0;

	for(let i = 0; i < 9 ; i++){
		let player = document.getElementsByClassName('box')[i];
		console.log(player);
		player.onclick = function(event){
			let target = event.target;
			if (target.innerHTML == '') {
				if (count < 9){
					fillBox(event.target, givePlayerSymbol());
					switchPlayer();
					count++
					if (checkWin() == true) {
						alert('You won');
					    if(target.innerHTML == 'X') {
					    	player_1_winCount++;
					    	document.getElementById('player_1').innerHTML = player_1_winCount;
					    } else {			
					    	player_2_winCount++;	    	
					   		document.getElementById('player_2').innerHTML = player_2_winCount;
					    }
							reset();
					} else if (count == 9) {
						alert('draw! Again');
						reset();
					}
				}
			} else {
				return false
			}	
		}
	}
	
	
