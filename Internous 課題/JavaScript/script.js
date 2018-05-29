//問1
document.write("問1<br>");
document.write("★★★★★<br><br>")

for(var i=1; i<=5; i++){
    document.write("★");
}
document.write("<br><br>");

//問2
document.write("問2<br>");
for(var i=1; i<=3; i++){
    document.write("★");
    }
    document.write("<br>");
for(var i=1; i<=3; i++){
    document.write("★");
    }
document.write("<br><br>");


//問3
document.write("問3<br>");
for(var i=1; i<=5; i++){
    document.write("☆");
    }
    document.write("<br>");
for(var i=6; i<=10; i++){
    document.write("☆");
    }
document.write("<br><br>");


//問4
document.write("問4<br>");
for(var j=1; j <= 4; j++){
    for(var i=1; i<=5; i++){
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br><br>");


//問5
document.write("問5<br>");
for(var i=1; i<=4; i++){
    for(var j=1; j<=3; j++){
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br><br>");



//問6
document.write("問6<br>");
for(var j=1; j<=3; j++){
    for(var i=1; i<=3; i++){
        if(i % 2 == 1){
            document.write("★");
        }else{
            document.write("☆");
        }
    }
    document.write("<br>");
}
document.write("<br><br>");


//問7
document.write("問7<br>");
for(var i=1; i<=4; i++){
    for(var j=1; j<=5; j++){
        if(j % 2 == 1){
            document.write("★");
        }else{
            document.write("☆");
        }
    }
    document.write("<br>");
}
document.write("<br><br>");


//問8
document.write("問8<br>");
for(var i=1; i<=5; i++){
    for(var j=1; j<=i; j++){
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br><br>");



//■■■問1■■■
document.write("■■■問1■■■<br>");
function area(radius){
    return "半径" + radius + "の円の面積は" + radius * radius * 3.14 + "です。";
}
document.write(area(5));
document.write("<br>");
document.write(area(7));
document.write("<br>");
document.write(area(10));
document.write("<br><br>");


//■■■問2■■■
document.write("■■■問2■■■<br>");
function fee(otona,kodomo){
    var total="グループの合計金額は";
    var desu="円です。";
    return total +(otona*500 + kodomo*200) + desu ;
}
document.write("A" + fee(2,4) + "<br>");
document.write("B" + fee(1,5) + "<br>");
document.write("C" + fee(3,7) + "<br>");

document.write("<br><br>");







