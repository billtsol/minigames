var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

a_b = [
	0,
	'Α',
	'Β',
	'Γ',
	'Δ',
	'Ε',
	'Ζ',
	'Η',
	'Θ',
	'Ι',
	'Κ',
	'Λ',
	'Μ',
	'Ν',
	'Ξ',
	'Ο',
	'Π',
	'Ρ',
	'Σ',
	'Τ',
	'Υ',
	'Φ',
	'Χ',
	'Ψ',
	'Ω',
];

var aObject = {
	x: 0,
	y: 0,
	width: 100,
	height: 40,
};

var images = new Array();

images[1] = Object.create(aObject);
img1 = new Image();
img1.src = './img/img1.png';
images[1].view = img1;
images[1].x = 147;
images[1].y = 70;
images[1].width = 50;
images[1].height = 50;

images[2] = Object.create(aObject);
img1 = new Image();
img1.src = './img/img2.png';
images[2].view = img1;
images[2].x = 150;
images[2].y = 120;
images[2].width = 50;
images[2].height = 50;

images[3] = Object.create(aObject);
img1 = new Image();
img1.src = './img/img3.png';
images[3].view = img1;
images[3].x = 111;
images[3].y = 120;
images[3].width = 45;
images[3].height = 30;

images[4] = Object.create(aObject);
img1 = new Image();
img1.src = './img/img4.png';
images[4].view = img1;
images[4].x = 188;
images[4].y = 120;
images[4].width = 45;
images[4].height = 30;

images[5] = Object.create(aObject);
img1 = new Image();
img1.src = './img/img5.png';
images[5].view = img1;
images[5].x = 145;
images[5].y = 170;
images[5].width = 30;
images[5].height = 50;

images[6] = Object.create(aObject);
img1 = new Image();
img1.src = './img/img6.png';
images[6].view = img1;
images[6].x = 175;
images[6].y = 170;
images[6].width = 30;
images[6].height = 50;

images[7] = Object.create(aObject);
img1 = new Image();
img1.src = './img/img7.png';
images[7].view = img1;
images[7].x = 160;
images[7].y = 50;
images[7].width = 80;
images[7].height = 70;

var alfa = new Array();
var x = 0;
var y = 0;
for (i = 1; i <= 24; i++) {
	alfa[i] = Object.create(aObject);
	alfa[i].gr = a_b[i];
	alfa[i].width = 30;
	alfa[i].height = 30;
	alfa[i].x = 300 + x;
	alfa[i].y = 50 + y;
	x = x + 50;
	if (i == 10 || i == 20) {
		x = 0;
		y = y + 50;
		if (i == 20) {
			x = 150;
		}
	}
	alfa[i].face = true;
	alfa[i].count = 0;
}

all_word = new Array();
k = word.length;
for (i = 0; i < k; i++) {
	all_word[i] = word[i];
}

for (i = 0; i < k; i++) {
	r = Math.floor(Math.random() * k);
	temp = all_word[i];
	all_word[i] = all_word[r];
	all_word[r] = temp;
}

canvas.addEventListener('mousemove', mousemoveHandler, false);
function mousemoveHandler(event) {
	var mouseX = event.pageX - canvas.offsetLeft;
	var mouseY = event.pageY - canvas.offsetTop;
	canvas.style.cursor = 'default';
	for (i = 1; i <= 24; i++) {
		if (
			mouseX > alfa[i].x &&
			mouseX < alfa[i].x + alfa[i].width &&
			mouseY > alfa[i].y - 20 &&
			mouseY < alfa[i].y + alfa[i].height - 30 &&
			alfa[i].face
		) {
			canvas.style.cursor = 'pointer';
		}
	}
}
var thesi = 0;
canvas.addEventListener('mousedown', mousedownHandler, false);
function mousedownHandler(event) {
	var mouseX = event.pageX - canvas.offsetLeft;
	var mouseY = event.pageY - canvas.offsetTop;
	for (i = 1; i <= 24; i++) {
		if (
			mouseX > alfa[i].x &&
			mouseX < alfa[i].x + alfa[i].width &&
			mouseY > alfa[i].y - 20 &&
			mouseY < alfa[i].y + alfa[i].height - 30 &&
			alfa[i].face
		) {
			alfa[i].face = false;
			thesi = i;
		}
	}
}

var level = true;
var count = 0;

var gram = new Array();
gram[0] = 'Q';
var apantisi = new Array();
apantisi[0] = 'Q';
var flag = 0;
var a = 0;
var metrisi = 0;
var lathos = false;
var counter = 0;
var lose = false;
update();
function update() {
	requestAnimationFrame(update, canvas);
	ctx.fillStyle = '#03b796';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	if (!lose) {
		ctx.fillStyle = 'black';
		ctx.fillRect(20, 50, 5, 380);
		ctx.fillRect(20, 50, 150, 5);
		ctx.fillRect(170, 50, 5, 20);

		for (i = 1; i <= 24; i++) {
			ctx.fillStyle = 'black';
			ctx.font = '40px Verdana';
			if (!alfa[i].face) {
				ctx.fillStyle = 'red';
			}
			ctx.fillText(alfa[i].gr, alfa[i].x, alfa[i].y);
		}

		if (level) {
			if (count != 0) {
				len_gram = length.gram;
				for (i = 1; i < len_gram; i++) {
					gram.pop();
					apantisi.pop();
				}
			}

			lexi = all_word[count];
			lexi_len = lexi.length;
			for (i = 1; i <= lexi_len; i++) {
				gram[i] = lexi[i - 1];
				apantisi[i] = 'Q';
			}
			for (i = 1; i <= 24; i++) {
				alfa[i].count = 0;
				alfa[i].face = true;
			}
			count = count + 1;
			metrisi = 1;
			level = false;
			thesi = 0;
			counter = 0;
		} else {
			for (i = 1; i <= lexi_len; i++) {
				ctx.fillStyle = 'black';
				ctx.font = '40px Verdana';
				if (i == 1) {
					ctx.fillText(gram[i], 250 + i * 40, 400);
				} else if (apantisi[i] != 'Q') {
					ctx.fillText(gram[i], 250 + i * 40, 400);
				}
				ctx.font = '50px Verdana';
				ctx.fillText('_', 250 + i * 40, 400);
			}

			if (thesi != 0) {
				i = 2;
				while (i <= lexi_len && alfa[thesi].count == 0) {
					if (gram[i] == alfa[thesi].gr) {
						apantisi[i] = gram[i];
						metrisi = metrisi + 1;
					}

					i = i + 1;
				}
				if (alfa[thesi].count == 0) {
					alfa[thesi].count = 1;
				}

				flag = 2;
				i = 2;
				while (i <= lexi_len) {
					if (gram[i] != alfa[thesi].gr) {
						flag = flag + 1;
					}
					i = i + 1;
				}
				if (flag == i) {
					lathos = true;
				}
				thesi = 0;
			}

			if (lathos) {
				counter = counter + 1;
				lathos = false;
			}

			if (counter >= 1) {
				ctx.drawImage(
					images[1].view,
					images[1].x,
					images[1].y,
					images[1].width,
					images[1].height
				);
			}
			if (counter >= 2) {
				ctx.drawImage(
					images[2].view,
					images[2].x,
					images[2].y,
					images[2].width,
					images[2].height
				);
			}
			if (counter >= 3) {
				ctx.drawImage(
					images[3].view,
					images[3].x,
					images[3].y,
					images[3].width,
					images[3].height
				);
			}
			if (counter >= 4) {
				ctx.drawImage(
					images[4].view,
					images[4].x,
					images[4].y,
					images[4].width,
					images[4].height
				);
			}
			if (counter >= 5) {
				ctx.drawImage(
					images[5].view,
					images[5].x,
					images[5].y,
					images[5].width,
					images[5].height
				);
			}
			if (counter >= 6) {
				ctx.drawImage(
					images[6].view,
					images[6].x,
					images[6].y,
					images[6].width,
					images[6].height
				);
			}
			if (counter >= 7) {
				ctx.drawImage(
					images[7].view,
					images[7].x,
					images[7].y,
					images[7].width,
					images[7].height
				);
			}
			if (counter == 8) {
				lose = true;
			}

			if (metrisi == lexi_len) {
				a = a + 1;
				if (a > 150) {
					level = true;
					a = 0;
				}
				ctx.fillStyle = 'black';
				ctx.font = '40px Verdana';
				ctx.fillText('ΤΗΝ ΒΡHΚΕΣ', 350, 350);
			}
		}
	} else {
		ctx.fillStyle = 'black';
		ctx.font = '40px Verdana';
		ctx.fillText('ΕΧΑΣΕΣ', 300, 250);
	}
	ctx.fillStyle = 'black';
	ctx.font = '10px Verdana';
	ctx.fillText('BillTsol Ⓒ 2020-2021 All Rights Reserved', 590, 427);
}
