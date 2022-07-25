var count = 0;

function changeBackgroundColor(){
	count++;
	if (count % 4 === 1) {
		document.body.style.backgroundColor = "#ad82cf";
	}
	else if (count % 4 === 2) {
		document.body.style.backgroundColor = "#663399";
	}
	else if (count % 4 === 3) {
		document.body.style.backgroundColor = "#9259a8";
	}
	else {
		document.body.style.backgroundColor = "#debeef";
	
	}
}
