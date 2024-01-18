var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var aclass = {
	x: 0,
	y: 0,
	width: 30,
	height: 60,
};

var cardx = new Array();
var cardy = new Array();
var card_face = new Array();
var card_view = new Array();
var card_check = [
	'0',
	'Α',
	'Α',
	'B',
	'B',
	'C',
	'C',
	'D',
	'D',
	'E',
	'E',
	'F',
	'F',
	'G',
	'G',
	'H',
	'H',
	'I',
	'I',
	'J',
	'J',
	'K',
	'K',
	'L',
	'L',
	'M',
	'M',
	'N',
	'N',
	'O',
	'O',
	'P',
	'P',
	'Q',
	'Q',
	'R',
	'R',
	'S',
	'S',
	'T',
	'T',
	'U',
	'U',
	'V',
	'V',
	'W',
	'W',
	'X',
	'X',
	'Y',
	'Y',
	'Z',
	'Z',
];

var foto_num = 1;
var str = '' + foto_num;
all_image = new Image();
all_image.src = 'img/image' + str + '.png';

var x = 0;
var y = 0;
for (i = 1; i <= 52; i++) {
	card_face[i] = false;
	//H card ston x
	cardx[i] = 15 + x;
	x = x + 75;
	if (i == 13 || i == 26 || i == 39) {
		x = 0;
	}
	//H card ston y
	cardy[i] = y + 20;
	if (i == 13 || i == 26 || i == 39) {
		y = y + 130;
	}

	if (i % 2 == 1) {
		str = '' + foto_num;
		all_image = new Image();
		all_image.src = 'img/image' + str + '.png';
		foto_num += 1;
	}
	card_view[i] = all_image;
}

for (i = 1; i <= 52; i++) {
	r = Math.floor(Math.random() * 52) + 1;
	temp1 = card_check[i];
	card_check[i] = card_check[r];
	card_check[r] = temp1;

	temp2 = card_view[i];
	card_view[i] = card_view[r];
	card_view[r] = temp2;

	temp3 = card_face[i];
	card_face[i] = card_face[r];
	card_face[r] = temp3;
}

canvas.addEventListener('mousemove', mousemoveHandler, false); //MOUSE
function mousemoveHandler(event) {
	var mouseX = event.pageX - canvas.offsetLeft;
	var mouseY = event.pageY - canvas.offsetTop;
	canvas.style.cursor = 'default';
	for (i = 1; i <= 52; i++) {
		if (
			mouseX > cardx[i] &&
			mouseX < cardx[i] + 70 &&
			mouseY > cardy[i] &&
			mouseY < cardy[i] + 120 &&
			!card_face[i]
		) {
			canvas.style.cursor = 'pointer';
		}
	}
}

var pos1, pos2;
var ch = 0;
canvas.addEventListener('mousedown', mousedownHandler, false);
function mousedownHandler(event) {
	var mouseX = event.pageX - canvas.offsetLeft;
	var mouseY = event.pageY - canvas.offsetTop;

	for (i = 1; i <= 52; i++) {
		if (
			mouseX > cardx[i] &&
			mouseX < cardx[i] + 70 &&
			mouseY > cardy[i] &&
			mouseY < cardy[i] + 120 &&
			!card_face[i]
		) {
			if (ch == 0) {
				pos1 = i;
				ch = 1;
				card_face[pos1] = true;
			} else if (ch == 1) {
				pos2 = i;
				ch = 2;
				card_face[pos2] = true;
			}
		}
	}
}

var score = 0;
var times = 0;
var start_time = new Date().getTime();

var click = 0;
update();
function update() {
	requestAnimationFrame(update, canvas);
	ctx.fillStyle = 'orange';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	for (i = 1; i <= 52; i++) {
		ctx.fillStyle = 'aqua';
		ctx.fillRect(cardx[i], cardy[i], 70, 120);
		if (card_face[i]) {
			ctx.drawImage(card_view[i], cardx[i], cardy[i], 70, 120);
		}
	}
	if (ch == 2) {
		if (card_check[pos1] == card_check[pos2]) {
			score++;
			ch = 0;
			click++;
		} else {
			if (times > 80) {
				card_face[pos1] = false;
				card_face[pos2] = false;
				ch = 0;
				times = 0;
				click++;
			}
			times++;
		}
	}

	now_time = new Date().getTime();
	sec = (now_time - start_time) / 1000;
	sec = Math.floor(sec);

	ctx.fillStyle = 'black';
	ctx.font = '50px Verdana';
	ctx.fillText('Sec: ' + sec, 1, 590);

	ctx.fillStyle = 'black';
	ctx.font = '50px Verdana';
	ctx.fillText('  | Score: ' + score + '/26', 240, 590);

	ctx.fillStyle = 'black';
	ctx.font = '50px Verdana';
	ctx.fillText('  | Attempts: ' + click, 500, 590);
}
