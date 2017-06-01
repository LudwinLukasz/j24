function drawTree(size) {
	var star = "*";

	for(i = 1; i <= size; i++){
		for(j = 1; j <= i; j++ ) {
			console.log(star);
		}
		star += "*";
	}
}

drawTree(5);

function drawNiceTree(size) {
	var star = "*";
	var space = "";
	var n;

	n = Math.floor(size/2) +1;
	for(x = 1;x <= n-1; x++) {
	space += " ";
	}
	console.log(n);
	for(i = 1; i <= n; i++){
		for(j = 1; j <= i; j++ ) {
			console.log(space+star);
		}
		star += "**";
		space = space.slice(0, -1);
	}
}
drawNiceTree(9);