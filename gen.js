var canvas;
var ctx;
var w = 1200;
var h = 600;

//imgArray = ['Layer 4.png', 'Layer 5.png', 'Layer 15.png', 'Layer 17.png', 'Layer 18.png', 'Layer 19.png', 'Layer 21.png', 'Layer 47.png', 'Layer 48 copy 2.png'];
var map = document.getElementById("map");
var airport = document.getElementById("airport");
var organ = document.getElementById("organ");
var zara = document.getElementById("zara");
var ticket = document.getElementById("ticket");
var lixi = document.getElementById("lixi");
var transfer = document.getElementById("transfer");
var bigHalf = document.getElementById("bigHalf");
var flow = document.getElementById("flow");

//var images = [map,airport,organ,zara,ticket,lixi,transfer,bigHalf,flow];
//imgs
// var map = {
//     "x": w/2,
//     "y": h/2,
//     "w": 20,
//     "h": 35,
//     "a": 0.7,
//     "img": 'Layer 4.png',
// }
// var c = {
//     "x": w/2,
//     "y": h/2,
//     "r": 40,
//     "c": 50,
//     "a": 1,
// }


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var map = document.getElementById("map");
var airport = document.getElementById("airport");
var organ = document.getElementById("organ");
var zara = document.getElementById("zara");
var ticket = document.getElementById("ticket");
var lixi = document.getElementById("lixi");
var transfer = document.getElementById("transfer");
var bigHalf = document.getElementById("bigHalf");
var flow = document.getElementById("flow");

var images = [map,airport,organ,zara,ticket,lixi,transfer,bigHalf,flow];

var o1 = {
"x": w/2,
"y": h/2,
"w": 1200,
"h": 600,
"c": Math.floor(Math.random()*360),
"s": Math.floor(Math.random()*80),
"l": Math.floor(Math.random()*30+70),
"a": Math.random()*0.3+0.1
};
var o2 = {
"x": w/2,
"y": h/2,
"r": 10,
"c": Math.floor(Math.random()*350+10),
};
var a1 = {
"x": w/2,
"y": h/2,
"w": 1200,
"h": 600,
"c": 0,
"a": 0.05
};

function rect(o){
var x = o.x;
var y = o.y;
o.x = o.x-o.w/2;
o.y = o.y-o.h/2;
ctx.beginPath();
ctx.moveTo(o.x,o.y);
ctx.lineTo(o.x+o.w,o.y);
ctx.lineTo(o.x+o.w,o.y+o.h);
ctx.lineTo(o.x,o.y+o.h);
ctx.lineTo(o.x,o.y);
ctx.fillStyle = "hsla("+o.c+",70%,85%,"+o.a+")";
ctx.fill();
o.x = x;
o.y = y;
}
function rectA(o){
var x = o.x;
var y = o.y;
o.x = o.x-o.w/2;
o.y = o.y-o.h/2;
ctx.beginPath();
ctx.moveTo(o.x,o.y);
ctx.lineTo(o.x+o.w,o.y);
ctx.lineTo(o.x+o.w,o.y+o.h);
ctx.lineTo(o.x,o.y+o.h);
ctx.lineTo(o.x,o.y);
ctx.fillStyle = "hsla("+o.c+",100%,100%,"+o.a+")";
ctx.fill();
o.x = x;
o.y = y;
}
function circle(o){
ctx.beginPath();
ctx.arc(o.x,o.y,o.r,0,2*Math.PI);
ctx.fillStyle = "hsla("+o.c+",100%,0%,1)";
ctx.fill();
}



//general randoms
var result1 = Math.floor(Math.random()*9);
var result2 = Math.floor(Math.random()*9);
var result3 = Math.floor(Math.random()*9);
var result4 = Math.floor(Math.random()*9);
var result5 = Math.floor(Math.random()*9);

//1
var x1 = Math.floor(Math.random()*1200);
var y1 = Math.floor(Math.random()*600);
var w1 = Math.floor(Math.random()*300);
var h1 = Math.floor(Math.random()*300);

//2
var x2 = Math.floor(Math.random()*1200);
var y2 = Math.floor(Math.random()*600);
var w2 = Math.floor(Math.random()*300);
var h2 = Math.floor(Math.random()*300);

//3
var x3 = Math.floor(Math.random()*1200);
var y3 = Math.floor(Math.random()*600);
var w3 = Math.floor(Math.random()*300);
var h3 = Math.floor(Math.random()*300);

//4
var x4 = Math.floor(Math.random()*1200);
var y4 = Math.floor(Math.random()*600);
var w4 = Math.floor(Math.random()*300);
var h4 = Math.floor(Math.random()*300);

//5
var x5 = Math.floor(Math.random()*1200);
var y5 = Math.floor(Math.random()*600);
var w5 = Math.floor(Math.random()*300);
var h5 = Math.floor(Math.random()*300);

//flow randoms
var xF = Math.floor(Math.random()*-100);
var yF = Math.floor(Math.random()*-100);
var wF = Math.floor(Math.random()*600+400);
var hF = Math.floor(Math.random()*1000+500);

//bigHalf randoms
var xB = Math.floor(Math.random()*-200);
var yB = Math.floor(Math.random()*-600);
var wB = Math.floor(Math.random()*400+100);
var hB = Math.floor(Math.random()*100+300);




setUpCanvas();

animationLoop();

function animationLoop(){

    setTimeout(()=> {
        clear();
        rect(o1);
    
        ctx.drawImage(bigHalf,xB,yB,wB,hB);
        ctx.drawImage(images[result1], x1, y1, w1, h1);
        ctx.drawImage(images[result2], x2, y2, w2, h2);
        ctx.drawImage(images[result3], x3, y3, w3, h3);
        ctx.drawImage(flow,xF,yF,wF,hF);
        ctx.drawImage(images[result4], x4, y4, w4, h4);
        ctx.drawImage(images[result5], x5, y5, w5, h5);
   
      
    
    var textArray = ["wordle?","india vs. england?","ukraine?","queen elizabeth?","ind vs SA?","election results?","passing?","powerball numbers?","johnny depp?","will smith?","amber heard?","euphoria?","betty white?","rogers outage?","why is there a formula shortage?","why is rogers down?"];
    
        //textArray1 randoms
        var xT1 = Math.floor(Math.random()*1200+20);
        var yT1 = Math.floor(Math.random()*600+20);
        var wT1 = Math.floor(Math.random()*100);
    
       //textArray2 randoms
       var xT2 = Math.floor(Math.random()*1200+20);
       var yT2 = Math.floor(Math.random()*600+20);
       var wT2 = Math.floor(Math.random()*100);
    
       //textArray3 randoms
       var xT3 = Math.floor(Math.random()*1200+20);
       var yT3 = Math.floor(Math.random()*600+20);
       var wT3 = Math.floor(Math.random()*100);
    
       //textArray4 randoms
       var xT4 = Math.floor(Math.random()*1200+20);
       var yT4 = Math.floor(Math.random()*600+20);
       var wT4 = Math.floor(Math.random()*100);
    
       //textArray5 randoms
       var xT5 = Math.floor(Math.random()*1200+20);
       var yT5 = Math.floor(Math.random()*600+20);
       var wT5 = Math.floor(Math.random()*100);
    
       //main txt randoms
       var xTe = Math.floor(Math.random()*190+500)
       var yTe = Math.floor(Math.random()*190+200)
    
        //general text randoms
        var resultT1 = Math.floor(Math.random()*16);
        var resultT2 = Math.floor(Math.random()*16);
        var resultT3 = Math.floor(Math.random()*16);
        var resultT4 = Math.floor(Math.random()*16);
        var resultT5 = Math.floor(Math.random()*16);
    
        //colour text
        var cT1 = Math.floor(Math.random()*35+o1.c);
        var aT1 = Math.random()*0.4;
    
        ctx.font= wT1+"px helvetica";
        ctx.fillStyle = "hsla("+cT1+",100%,20%,"+aT1+")";
        ctx.fillText(textArray[resultT1], xT1, yT1);
        ctx.font= wT2+"px helvetica";
        ctx.fillText(textArray[resultT2], xT2, yT2);
        ctx.font= wT3+"px helvetica";
        ctx.fillText(textArray[resultT3], xT3, yT3);
        ctx.font= wT4+"px helvetica";
        ctx.fillText(textArray[resultT4], xT4, yT4);
        ctx.font= wT5+"px helvetica";
        ctx.fillText(textArray[resultT5], xT5, yT5);
    


        ctx.font= 40+"px helvetica";
    ctx.fillStyle = "hsla("+cT1+",100%,20%,1)";
    ctx.fillText("what was it this time?", 100, 100);

    },0);

    circle(o2);

    requestAnimationFrame(animationLoop);
}

function clear(){
    ctx.clearRect(0,0,w,h);
}

function circle(o){
    ctx.beginPath();
    ctx.arc(o.x,o.y,o.r,0,2*Math.PI);
    ctx.fillStyle = "hsla("+o.c+",100%,50%,"+o.a+")";
    ctx.fill();
}

function text() {
    ctx.font="100px gambado-sans-forte";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("hover over me!", canvas.width/2, canvas.height/2);
  }

function randn(r){
    var result = Math.random()*r - r/2;
    return result
}
function randi(r){
    var result = Math.floor(Math.random()*r);
    return result
}
function rand(r){
    var result = Math.random()*r;
    return result
}

function setUpCanvas(){
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
}
