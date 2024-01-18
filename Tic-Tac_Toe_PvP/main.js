var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

function view() {
	for (i = 1; i <= 3; i++) {
		ctx.fillStyle = 'white';
		ctx.font = '50px Verdana';
		if (a[i] == 2) {
			ctx.fillText('O', thes[i].x + 20, thes[i].y + 50);
		}
		if (b[i] == 2) {
			ctx.fillText('O', thes[i + 3].x + 20, thes[i + 3].y + 50);
		}
		if (c[i] == 2) {
			ctx.fillText('O', thes[i + 6].x + 20, thes[i + 6].y + 50);
		}
		ctx.fillStyle = 'black';
		if (a[i] == 1) {
			ctx.fillText('X', thes[i].x + 20, thes[i].y + 50);
		}
		if (b[i] == 1) {
			ctx.fillText('X', thes[i + 3].x + 20, thes[i + 3].y + 50);
		}
		if (c[i] == 1) {
			ctx.fillText('X', thes[i + 6].x + 20, thes[i + 6].y + 50);
		}
	}
	ctx.fillStyle = 'black';
	ctx.fillRect(325, 100, 5, 235);
	ctx.fillRect(405, 100, 5, 235);
	ctx.fillRect(250, 175, 235, 5);
	ctx.fillRect(250, 255, 235, 5);
}
function winner() {
	if (
		(a[1] == 1 && a[1] == a[2] && a[1] == a[3]) ||
		(a[1] == 1 && a[1] == b[1] && a[1] == c[1]) ||
		(a[1] == 1 && a[1] == b[2] && a[1] == c[3]) ||
		(a[2] == 1 && a[2] == b[2] && a[2] == c[2]) ||
		(a[3] == 1 && a[3] == b[2] && a[3] == c[1]) ||
		(a[3] == 1 && a[3] == b[3] && a[3] == c[3]) ||
		(b[1] == 1 && b[1] == b[2] && b[1] == b[3]) ||
		(c[1] == 1 && c[1] == c[2] && c[1] == c[3])
	) {
		win = 0; //X
	}
	if (
		(a[1] == 2 && a[1] == a[2] && a[1] == a[3]) ||
		(a[1] == 2 && a[1] == b[1] && a[1] == c[1]) ||
		(a[1] == 2 && a[1] == b[2] && a[1] == c[3]) ||
		(a[2] == 2 && a[2] == b[2] && a[2] == c[2]) ||
		(a[3] == 2 && a[3] == b[2] && a[3] == c[1]) ||
		(a[3] == 2 && a[3] == b[3] && a[3] == c[3]) ||
		(b[1] == 2 && b[1] == b[2] && b[1] == b[3]) ||
		(c[1] == 2 && c[1] == c[2] && c[1] == c[3])
	) {
		win = 1; //O
	}
}

var aObject = {
	x: 0,
	y: 0,
	width: 100,
	height: 40,
};

var thes = new Array();
var x = 0;
var y = 0;
for (i = 1; i <= 9; i++) {
	thes[i] = Object.create(aObject);
	thes[i].width = 75;
	thes[i].height = 75;
	thes[i].x = 250 + x;
	thes[i].y = 100 + y;
	x = x + 80;
	if (i % 3 == 0) {
		x = 0;
		y = y + 80;
	}
}

var a = [5, 0, 0, 0];
var b = [5, 0, 0, 0];
var c = [5, 0, 0, 0];
var player = 1;

canvas.addEventListener('mousemove', mousemoveHandler, false);
function mousemoveHandler(event) {
	var mouseX = event.pageX - canvas.offsetLeft;
	var mouseY = event.pageY - canvas.offsetTop;
	canvas.style.cursor = 'default';
	if (win == -1 && kinisi != 10) {
		for (i = 1; i <= 9; i++) {
			if (
				mouseX > thes[i].x &&
				mouseX < thes[i].x + thes[i].width &&
				mouseY > thes[i].y &&
				mouseY < thes[i].y + thes[i].height
			) {
				canvas.style.cursor = 'pointer';
			}
		}
	}
}

canvas.addEventListener('mousedown', mousedownHandler, false);
function mousedownHandler(event) {
	var mouseX = event.pageX - canvas.offsetLeft;
	var mouseY = event.pageY - canvas.offsetTop;
	if (win == -1 && kinisi != 10) {
		for (i = 1; i <= 9; i++) {
			if (
				mouseX > thes[i].x &&
				mouseX < thes[i].x + thes[i].width &&
				mouseY > thes[i].y &&
				mouseY < thes[i].y + thes[i].height &&
				i <= 3 &&
				a[i] == 0
			) {
				if (player == 0) {
					a[i] = 1;
					player = 1;
				} else if (player == 1) {
					a[i] = 2;
					player = 0;
				}
				kinisi++;
			}

			if (
				mouseX > thes[i].x &&
				mouseX < thes[i].x + thes[i].width &&
				mouseY > thes[i].y &&
				mouseY < thes[i].y + thes[i].height &&
				i > 3 &&
				i < 7 &&
				b[i - 3] == 0
			) {
				if (player == 0) {
					b[i - 3] = 1;
					player = 1;
				} else if (player == 1) {
					b[i - 3] = 2;
					player = 0;
				}
				kinisi++;
			}

			if (
				mouseX > thes[i].x &&
				mouseX < thes[i].x + thes[i].width &&
				mouseY > thes[i].y &&
				mouseY < thes[i].y + thes[i].height &&
				i > 6 &&
				i <= 9 &&
				c[i - 6] == 0
			) {
				if (player == 0) {
					c[i - 6] = 1;
					player = 1;
				} else if (player == 1) {
					c[i - 6] = 2;
					player = 0;
				}
				kinisi++;
			}
		}
	} else {
		if (
			mouseX > 320 &&
			mouseX < 320 + 50 &&
			mouseY > 350 &&
			mouseY < 350 + 50
		) {
			win = -1;
			kinisi = 1;
			restart = true;
			win_f = true;
			delay = 0;
		}
	}
}
var replay = new Image();
replay.src = './replay.png';
var restart = false;
var o_wins = (x_wins = 0);
var kinisi = 1;
var win = -1;
var win_f = true;

var delay = 0;
update();
function update() {
	requestAnimationFrame(update, canvas);

	ctx.fillStyle = '#03b796';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	if (win == -1 && kinisi <= 9) {
		if (restart) {
			a = [5, 0, 0, 0];
			b = [5, 0, 0, 0];
			c = [5, 0, 0, 0];
			player = 1;
			restart = false;
		}
		for (i = 1; i <= 9; i++) {
			ctx.fillStyle = '#03b796';
			ctx.fillRect(thes[i].x, thes[i].y, thes[i].width, thes[i].height);
		}
		view();
		winner();

		ctx.fillStyle = 'white';
		ctx.font = '30px Verdana';
		if (player == 1) {
			ctx.fillText('Player: O', 10, 30);
		} else if (player == 0) {
			ctx.fillStyle = 'black';
			ctx.fillText('Player: X', 10, 30);
		}
	} else {
		if (delay > 150) {
			if (win == 0) {
				ctx.fillStyle = 'black';
				ctx.font = '40px Verdana';
				ctx.fillText('Winner: X', 260, 210);
				if (win_f) {
					x_wins++;
					win_f = false;
				}
			} else if (win == 1) {
				ctx.fillStyle = 'white';
				ctx.font = '40px Verdana';
				ctx.fillText('Winner: O', 260, 210);
				if (win_f) {
					o_wins++;
					win_f = false;
				}
			} else {
				ctx.fillStyle = 'gray';
				ctx.font = '40px Verdana';
				ctx.fillText('DRAW', 300, 210);
			}

			ctx.fillStyle = '#03b796';
			ctx.fillRect(325, 355, 45, 45);
			ctx.drawImage(replay, 320, 350, 50, 50);
		} else {
			view();
		}
		delay++;
	}
	ctx.fillStyle = 'black';
	ctx.font = '20px Verdana';

	ctx.fillText('O wins:  ' + o_wins, 650, 20);
	ctx.fillText('X wins:  ' + x_wins, 650, 60);

	ctx.fillStyle = 'black';
	ctx.font = '10px Verdana';
	ctx.fillText('BillTsol Ⓒ 2020-2021 All Rights Reserved', 602, 429);
}
