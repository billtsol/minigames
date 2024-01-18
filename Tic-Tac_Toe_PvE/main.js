
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

function view(){
    for (i=1; i<=9; i++){
        ctx.fillStyle= "white";
		ctx.font = "50px Verdana";
        if(game[i]==2){
			ctx.fillText("O" , thes[i].x+20 , thes[i].y +50);
		}
        ctx.fillStyle= "black";
        if (game[i]==1){
			ctx.fillText("X" , thes[i].x+20 , thes[i].y +50);
		}
	}
    ctx.fillStyle="black";
	ctx.fillRect( 325 , 100 , 5, 235);
	ctx.fillRect( 405 , 100 , 5, 235);
	ctx.fillRect( 250 , 175 , 235, 5);
	ctx.fillRect( 250 , 255 , 235, 5);
}

function who_win (){
	if(
	(game[1]==1 && game[2]==1 && game[3]==1) ||
	(game[4]==1 && game[5]==1 && game[6]==1) ||
	(game[7]==1 && game[8]==1 && game[9]==1) ||

	(game[1]==1 && game[4]==1 && game[7]==1) ||
	(game[2]==1 && game[5]==1 && game[8]==1) ||
	(game[3]==1 && game[6]==1 && game[9]==1) ||

	(game[1]==1 && game[5]==1 && game[9]==1) ||
	(game[3]==1 && game[5]==1 && game[7]==1)
	){
		win = 0;//X
	}
	if(
    (game[1]==2 && game[2]==2 && game[3]==2) ||
	(game[4]==2 && game[5]==2 && game[6]==2) ||
	(game[7]==2 && game[8]==2 && game[9]==2) ||

    (game[1]==2 && game[4]==2 && game[7]==2) ||
	(game[2]==2 && game[5]==2 && game[8]==2) ||
	(game[3]==2 && game[6]==2 && game[9]==2) ||

    (game[1]==2 && game[5]==2 && game[9]==2) ||
	(game[3]==2 && game[5]==2 && game[7]==2)
	){
		win = 1;//O
	}
}
var flag =false
function triliza_x(){
    flag = false;
    i=1;
    k=1;
    while (i<=7 && flag==false) {
        if(
            (game[i]==0) &&
            (game[i+1]==1 && game[i+2]==1)
        ){
            game[i]=1;
            flag =true;

        }

        else if (
            (game[i+1]==0) &&
            (game[i]==1 && game[i+2]==1)
        ){
            game[i+1]=1;
            flag =true;
        }

        else if (
            (game[i+2]==0) &&
            (game[i]==1 && game[i+1]==1)
        ){
            game[i+2]=1;
            flag =true;
        }

        else if (
            (game[k]==0) &&
            (game[k+3]==1 && game[k+6]==1)
        )
        {
            game[k]=1;
            flag =true;
        }

        else if (
            (game[k+3]==0) &&
            (game[k]==1 && game[k+6]==1)
        )
        {
            game[k+3]=1;
            flag =true;
        }

        else if (
            (game[k+6]==0) &&
            (game[k]==1 && game[k+3]==1)
        )
        {
            game[k+6]=1;
            flag =true;
        }
        k=k+1;
        i=i+3;
    }
    if (!flag) {
        if(
            (game[1]==0) &&
            (game[5]==1 && game[9]==1)
        ){
            game[1]=1;
            flag =true;
        }

        else if(
            (game[3]==0) &&
            (game[5]==1 && game[7]==1)
        ){
            game[3]=1;
            flag =true;
        }

        else if(
            (game[5]==0) &&
            (
                (game[1]==1 && game[9]==1) ||
                (game[3]==1 && game[7]==1)
            )
        ){
            game[5]=1;
            flag =true;
        }

        else if(
            (game[7]==0) &&
            (game[3]==1 && game[5]==1)

        ){
            game[7]=1;
            flag =true;
        }

        else if(
            (game[9]==0) &&
            (game[1]==1 && game[5]==1)

        ){
            game[9]=1;
            flag =true;
        }
    }
    return flag;
}

function triliza_o(){
    flag = false;
    i=1;
    k=1;
    while (i<=7 && flag==false) {
        if(
            (game[i]==0) &&
            (game[i+1]==2 && game[i+2]==2)
        ){
            game[i]=1;
            flag =true;

        }

        else if (
            (game[i+1]==0) &&
            (game[i]==2 && game[i+2]==2)
        ){
            game[i+1]=1;
            flag =true;
        }

        else if (
            (game[i+2]==0) &&
            (game[i]==2 && game[i+1]==2)
        ){
            game[i+2]=1;
            flag =true;
        }

        else if (
            (game[k]==0) &&
            (game[k+3]==2 && game[k+6]==2)
        )
        {
            game[k]=1;
            flag =true;
        }

        else if (
            (game[k+3]==0) &&
            (game[k]==2 && game[k+6]==2)
        )
        {
            game[k+3]=1;
            flag =true;
        }

        else if (
            (game[k+6]==0) &&
            (game[k]==2 && game[k+3]==2)
        )
        {
            game[k+6]=1;
            flag =true;
        }
        k=k+1;
        i=i+3;
    }
    if (!flag) {
        if(
            (game[1]==0) &&
            (game[5]==2 && game[9]==2)
        ){
            game[1]=1;
            flag =true;
        }

        else if(
            (game[3]==0) &&
            (game[5]==2 && game[7]==2)
        ){
            game[3]=1;
            flag =true;
        }

        else if(
            (game[5]==0) &&
            (
                (game[1]==1 && game[9]==1) ||
                (game[3]==1 && game[7]==1)
            )
        ){
            game[5]=1;
            flag =true;
        }

        else if(
            (game[7]==0) &&
            (game[3]==2 && game[5]==2)

        ){
            game[7]=1;
            flag =true;
        }

        else if(
            (game[9]==0) &&
            (game[1]==2 && game[5]==2)

        ){
            game[9]=1;
            flag =true;
        }
    }
    return flag;
}

function computer_brain(){
    if (kinisi==2){
		if(game[5]==2){
			game[9]= 1;
			player=1;
		}
		else if (game[2]==2 || game[4]==2){
			game[1]= 1;
			player= 1;
		}
		else if (game[6]==2){
		    game[3]= 1;
			player= 1;
		}
		else if (game[8]==2){
			game[7]= 1;
			player= 1;
		}
		else if (game[1]==2 || game[3]==2 || game[7]==2 || game[9]==2){
			game[5]= 1;
			player= 1;
		}
	}
    else if (kinisi>=3 && player==0){

        if(
            (game[5]==1 && kinisi<=4)
        ){
            if(
                (game[1]==2 && game[9]==2)
            ){
                game[6]=1;
                player= 1;
            }

            else if (
                (game[3]==2 && game[7]==2)
            ){
                game[4]=1;
                player= 1;
            }

            else if (
                (game[1]==2) &&
                (
                    game[6]==2 || game[8]==2
                )
                ){
                    if (game[6]==2 && game[8]==2 && game[3]==2){
                        game[7]=1
                    }
                    if(game[6]==2 && game[8]==2){
                        game[2]=1;
                    }
                    else {
                        game[9]=1;
                    }
                player= 1;
            }

            else if (
                (game[3]==2) &&
                (
                    game[4]==2 || game[8]==2
                )
                ){
                    if (game[4]==2 && game[8]==2 && game[1]==2){
                        game[9]=1
                    }

                    if(game[4]==2 && game[8]==2){
                        game[2]=1;
                    }
                    else {
                        game[7]=1;
                    }
                player= 1;
            }

            else if (
                (game[9]==2) &&
                (
                    game[2]==2 || game[4]==2
                ) && (game[1]==0)
                ){
                    if (game[2]==2 && game[4]==2 && game[7]==2){
                        game[3]=1
                    }
                    if(game[2]==2 && game[4]==2){
                        game[8]=1;
                    }
                    else {
                        game[1]=1;
                    }
                player= 1;
            }

            else if (
                (game[7]==2) &&
                (
                    game[2]==2 || game[6]==2
                )
                ){
                    if (game[2]==2 && game[6]==2 && game[9]==2){
                        game[1]=1
                    }
                    if(game[2]==2 && game[6]==2){
                        game[8]=1;
                    }
                    else {
                        game[3]=1;
                    }
                player= 1;
            }
        }
        if (player==0){
            if (game[5]==1 && kinisi==3){

                if(
                    game[2]==2 && game[9]==2
                ){
                    game[1]=1;
                }
                else if(
                    game[2]==2 && game[7]==2
                ){
                    game[3]=1;
                }

                else if(
                    game[8]==2 && game[1]==2
                ){
                    game[9]=1;
                }
                else if(
                    game[8]==2 && game[3]==2
                ){
                    game[7]=1;
                }
                player=1;
                return
            }

            if (
                (game[2]==2 && game[6]==2 && game[1]==1)
                && game[7]==0
            ){
                game[7]=1;
                player=1;
            }
            else if (
                (game[4]==2 && game[8]==2 && game[1]==1)
                && game[3]==0
            ){
                game[3]=1;
                player=1;
            }
            else if (
                (game[6]==2 && game[8]==2 && game[3]==1)
                && (game[1]==0)
            ){
                game[1]=1;
                player=1;
            }
            else if (
                (game[6]==2 && game[8]==2 && game[7]==1)
                && game[1]==0
            ){
                game[1]=1;
                player=1;
            }

            if (
                (game[1]==1) &&
                (game[2]==2 && game[4]==2)
            ){
                if (game[7]==2 && game[9]==0){
                    game[9]=1;
                    player=1;
                }
                if (game[9]==2 && game[5]==0){
                    game[5]=1;
                    player=1;
                }
                else if ( game[3]==2 && game[5]==0){
                    game[5]=1;
                    player=1;
                }
                else if (game[6]==0) {
                    game[6]=1;
                    player=1;
                }
            }
            else if (
                (game[3]==1) &&
                (game[2]==2 && game[6]==2)
            ){
                if (game[9]==2 && game[7]==0){
                    game[7]=1;
                    player=1;
                }
                else if ( game[1]==2 && game[5]==0){
                    game[5]=1;
                    player=1;
                }
                else if (game[5]==0 && game[7]==2){
                    game[5]=1;
                    player=1;
                }
                else if (game[4]==0){
                    game[4]=1;
                    player=1;
                }
            }
            else if (
                (game[7]==1) &&
                (game[4]==2 && game[8]==2)
            ){
                if (game[1]==2 && game[3]==0){
                    game[3]=1;
                    player=1;
                }
                else if (game[9]==2 && game[5]==0){
                    game[5]=1;
                    player=1;
                }
                else if (game[3]==2 && game[5]==0){
                    game[5]=1;
                    player=1;
                }
                else if (game[6]==0){
                    game[6]=1;
                    player=1;
                }
            }

            if(kinisi==3 && player==0 &&  game[5]==0){
                game[5]=1;
                player=1;

            }else if (kinisi==3 && player==0 &&  game[5]==2){
                game[7]=1;
                player=1;
            }
            i=1;
            while (player==0 && i<10){
                if (game[i]==0){
                    game[i]=1;
                    player=1;
                }
                i=i+1 ;
            }

        }
    }
}

var aObject ={
	x: 0,
	y: 0,
	width: 100,
	height: 40
};

var thes = new Array;
var x = 0;
var y =0;
for (i=1; i<=9; i++){
	thes[i] = Object.create(aObject);
	thes[i].width=75;
	thes[i].height=75;
	thes[i].x = 250 + x;
	thes[i].y = 100 + y;
	x=x+ 80;
	if (i%3==0){
		x = 0;
		y=y+ 80;
	}
}

var game = [5 ,
            0 , 0 , 0,
            0 , 0 , 0,
            0 , 0 , 0];

var player = 1;

canvas.addEventListener("mousemove", mousemoveHandler, false);
function mousemoveHandler(event){
	var mouseX = event.pageX - canvas.offsetLeft;
	var mouseY = event.pageY - canvas.offsetTop;
	canvas.style.cursor = "default";
	if(win==-1 && kinisi<=5){
	for (i=1; i<=9; i++){
		if (
			(mouseX>thes[i].x) &&
			(mouseX<thes[i].x+thes[i].width) &&
			(mouseY>thes[i].y) &&
			(mouseY<thes[i].y+thes[i].height) &&
            (game[i]==0)
			){
				canvas.style.cursor = "pointer";
		}
	}
    }
}

var kinisi=1;
canvas.addEventListener("mousedown", mousedownHandler, false);

function mousedownHandler(event){
	var mouseX = event.pageX - canvas.offsetLeft;
	var mouseY = event.pageY - canvas.offsetTop;
	if (win==-1 && kinisi<=5){
	for (i=1; i<=9; i++){
        if(player==1){
            if (
            (mouseX>thes[i].x) &&
            (mouseX<thes[i].x+thes[i].width) &&
            (mouseY>thes[i].y) &&
            (mouseY<thes[i].y+thes[i].height) &&
            (game[i]==0)
            ){
                    game[i]= 2;
                    player=0;
                    kinisi+=1;
            }
        }
	}//for
    }
    else {
        if (
		(mouseX>320) &&
		(mouseX<320+50) &&
		(mouseY>350) &&
		(mouseY<350+50)
		){
            win=-1;
            kinisi=1;
            restart=true;
            win_f=true;
            delay =0;
		}
    }

}

var win=-1;
var replay= new Image();
replay.src="./replay.png";
var restart =false;
var o_wins=x_wins=0;

var win_f=true;
var count =0;

var delay =0;

update();
function update() {
	requestAnimationFrame(update, canvas);

	ctx.fillStyle="#03b796";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	if (win==-1 && kinisi<=5){
		for (i=1; i<=9; i++){
			ctx.fillStyle= "#03b796";
			ctx.fillRect(thes[i].x,thes[i].y,thes[i].width,thes[i].height);
		}
        if (restart){
            game =[5,0 , 0 , 0,
					 0 , 0 , 0,
					 0 , 0 , 0];
            player = 1;
            restart = false;
            kinisi=1;
        }

		view();

        if(count>100 && player==0){
            if(triliza_x()){
                player=1;
            }
            else if (triliza_o()){
                player=1;
            }
            else {
                computer_brain();
            }
            count=0;
        }
        count=count+1;
		who_win();

		ctx.fillStyle= "white";
		ctx.font = "30px Verdana";
		if (player==1){
			ctx.fillText("Player: O" , 10 , 30);
		}
		else if (player==0){
            ctx.fillStyle= "black";
			ctx.fillText("Player: X" , 10 , 30);
		}
	}
    else {
        if(delay>150){
            if (win==0){
                ctx.fillStyle= "black";
                ctx.font = "40px Verdana";
                ctx.fillText("Winner: X" , 260 , 210);
                if(win_f){
                    x_wins=x_wins+1
                    win_f=false;
                }
            }
            else if(win==1){
                ctx.fillStyle= "white";
                ctx.font = "40px Verdana";
                ctx.fillText("Winner: O" , 260 , 210);
                if(win_f){
                    o_wins=o_wins+1
                    win_f=false;
                }
            }
            else{
                ctx.fillStyle= "gray";
                ctx.font = "40px Verdana";
                ctx.fillText("DRAW" , 300 , 210);
            }

            ctx.fillStyle= "#03b796";
            ctx.fillRect( 325, 355 , 45 , 45);
            ctx.drawImage(replay, 320 , 350 , 50 , 50);
        }
        else {
            view();
        }
        delay++

    }
    ctx.fillStyle= "black";
	ctx.font = "20px Verdana";

	ctx.fillText("O wins:  " + o_wins , 650 , 20);
	ctx.fillText("X wins:  " + x_wins , 650 , 60);

	ctx.font = "10px Verdana";
	ctx.fillText("BillTsol Ⓒ 2020-2021 All Rights Reserved" , 602 , 429);
}