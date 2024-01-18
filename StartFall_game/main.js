var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var aclass = {
	x: 0,
	y: 0,
	width: 50,
	height: 60,
};

// audio
var bulletm = new Audio('music/bullet.mp3');

var backgroundm = new Audio('music/background.mp3');

var meteo_hitm = new Audio('music/meteo_hit.mp3');

var astro_hitm = new Audio('music/astro_hit.mp3');

var game_overm = new Audio('music/game_over.mp3');

// images
player_img = new Image();
player_img.src = 'img/hero.png'; //player_img

meteo_img = new Image();
meteo_img.src = 'img/meteo.png'; //meteo_img

astro_img = new Image();
astro_img.src = 'img/astro.png'; //astro_img

bullet_img = new Image();
bullet_img.src = 'img/bullet1.png'; //bullet_img

background = new Image();
background.src = 'img/t.png'; //back

ammob = new Image();
ammob.src = 'img/ammob.png'; //ammob

//Objects
var hero = Object.create(aclass);
hero.x = 100;
hero.y = 250;
hero.width = 70;
hero.height = 40;
hero.vy = 0;
hero.face = true;
hero.bullet = 30;

var meteo = new Array();
for (i = 1; i <= 400; i++) {
	meteo[i] = Object.create(aclass);
	meteo[i].x = Math.floor(Math.random() * 30000) + 700;
	meteo[i].y = Math.floor(Math.random() * 480) + 20;
	meteo[i].width = Math.floor(Math.random() * 30) + 20;
	meteo[i].height = meteo[i].width;
	meteo[i].vx = -(Math.floor(Math.random() * 2) + 0.8);
	meteo[i].face = true;
}

var astro = new Array();
for (i = 1; i <= 40; i++) {
	astro[i] = Object.create(aclass);
	astro[i].x = Math.floor(Math.random() * 30000) + 700;
	astro[i].y = Math.floor(Math.random() * 480) + 20;
	astro[i].width = 40;
	astro[i].height = astro[i].width;
	astro[i].vx = -(Math.floor(Math.random() * 2) + 0.8);
	astro[i].face = true;
}

var bullet = new Array();
for (i = 1; i <= 300; i++) {
	bullet[i] = Object.create(aclass);
	bullet[i].x = hero.x;
	bullet[i].y = hero.y;
	bullet[i].width = 80;
	bullet[i].height = bullet[i].width;
	bullet[i].vx = 20;
	bullet[i].face = false;
}

var ammos = new Array();
for (i = 1; i <= 30; i++) {
	ammos[i] = Object.create(aclass);
	ammos[i].x = Math.floor(Math.random() * 30000) + 700;
	ammos[i].y = Math.floor(Math.random() * 480) + 20;
	ammos[i].width = 80;
	ammos[i].height = ammos[i].width;
	ammos[i].vx = -(Math.floor(Math.random() * 2) + 0.8);
	ammos[i].face = true;
}

//mouse
var pl = 1;
var p = 1;
canvas.addEventListener('mousedown', mousedownHandler, false);
function mousedownHandler(event) {
	var mouseX = event.pageX - canvas.offsetLeft;
	var mouseY = event.pageY - canvas.offsetTop;

	if (pl == 1) {
		backgroundm.currentTime = 0.05;
		backgroundm.play();
		pl = -1;
	}

	if (hero.face && p <= hero.bullet) {
		//bulletm.currentTime=0.05;
		//bulletm.play();

		bullet[p].face = true;
		bullet[p].y = hero.y;
		p = p + 1;
	}
}

canvas.addEventListener('mousemove', mousemoveHandler, false);
function mousemoveHandler(event) {
	var mouseX = event.pageX - canvas.offsetLeft;
	var mouseY = event.pageY - canvas.offsetTop;

	canvas.style.cursor = 'pointer';
	if (mouseY < hero.y) {
		hero.vy = -8;
	} else if (mouseY > hero.y + hero.height) {
		hero.vy = 8;
	} else if (mouseY > hero.y && mouseY < hero.y + hero.height) {
		hero.vy = 0;
	}
}

var point = 0;
update();
function update() {
	requestAnimationFrame(update, canvas);

	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	if (hero.face) {
		ctx.fillStyle = ' white';
		ctx.font = ' 20px Verdana';
		ctx.fillText('Astro ' + point + '/40', 770, 500);

		ctx.fillStyle = ' white';
		ctx.font = ' 20px Verdana';
		if (0 < hero.bullet) {
			ctx.fillText('Ammo: ' + (hero.bullet - p + 1), 10, 500);
		}
		ctx.drawImage(player_img, hero.x, hero.y, hero.width, hero.height);

		for (i = 1; i <= 400; i++) {
			if (meteo[i].face) {
				meteo[i].x = meteo[i].x + meteo[i].vx;
				ctx.drawImage(
					meteo_img,
					meteo[i].x,
					meteo[i].y,
					meteo[i].width,
					meteo[i].height
				);
			}
			if (
				hero.x + hero.width >= meteo[i].x &&
				hero.x <= meteo[i].x + meteo[i].width &&
				hero.y + hero.height >= meteo[i].y &&
				hero.y <= meteo[i].y + meteo[i].height &&
				hero.face
			) {
				hero.face = false;
				//game_overm.currentTime=0.05;
				//game_overm.play();
			}
		}

		// astro
		for (i = 1; i <= 40; i++) {
			if (astro[i].face) {
				astro[i].x = astro[i].x + astro[i].vx;
				ctx.drawImage(
					astro_img,
					astro[i].x,
					astro[i].y,
					astro[i].width,
					astro[i].height
				);
			}
			if (
				hero.x + hero.width >= astro[i].x &&
				hero.x <= astro[i].x + astro[i].width &&
				hero.y + hero.height >= astro[i].y &&
				hero.y <= astro[i].y + astro[i].height &&
				astro[i].face
			) {
				astro[i].face = false;

				//astro_hitm.currentTime=0.01;
				//astro_hitm.play();

				point = point + 1;
			}
		}

		//bullet
		for (i = 1; i <= hero.bullet; i++) {
			if (bullet[i].face) {
				bullet[i].x = bullet[i].x + bullet[i].vx;
				ctx.drawImage(
					bullet_img,
					bullet[i].x,
					bullet[i].y,
					bullet[i].width,
					bullet[i].height
				);
			}
			for (k = 1; k <= 400; k++) {
				if (
					bullet[i].x + bullet[i].width >= meteo[k].x &&
					bullet[i].x <= meteo[k].x + meteo[k].width &&
					bullet[i].y + bullet[i].height >= meteo[k].y &&
					bullet[i].y <= meteo[k].y + meteo[k].height &&
					bullet[i].face &&
					meteo[k].face
				) {
					bullet[i].face = false;
					meteo[k].face = false;

					//meteo_hitm.currentTime=0.05;
					//meteo_hitm.play();
				}
			}
		}

		//ammos
		for (i = 1; i <= 30; i++) {
			if (ammos[i].face) {
				ammos[i].x = ammos[i].x + ammos[i].vx;
				ctx.drawImage(
					ammob,
					ammos[i].x,
					ammos[i].y,
					ammos[i].width,
					ammos[i].height
				);
			}
			if (
				hero.x + hero.width >= ammos[i].x &&
				hero.x <= ammos[i].x + ammos[i].width &&
				hero.y + hero.height >= ammos[i].y &&
				hero.y <= ammos[i].y + ammos[i].height &&
				ammos[i].face
			) {
				ammos[i].face = false;

				astro_hitm.currentTime = 0.01;
				astro_hitm.play();
				hero.bullet = hero.bullet + 10;
			}
		}

		hero.y = hero.y + hero.vy;
		if (hero.y < -25) {
			hero.y = -25;
		}

		if (hero.y + hero.height > 545) {
			hero.y = 545 - hero.height;
		}
	} else {
		ctx.fillStyle = ' white';
		ctx.font = '50px Verdana';
		ctx.fillText('YOU LOSE ', 350, 250);
	}
}
