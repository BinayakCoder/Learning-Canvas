var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "red";
var width = 2;
var mouseEvent = "";
var x,y;
canvas.addEventListener("mousedown", md);
function md(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseEvent  = "mousedown";
}
canvas.addEventListener("mouseup", mu);
function mu(e) {
    mouseEvent  = "mouseup";
}
canvas.addEventListener("mouseleave", ml);
function ml(e) {
    mouseEvent  = "mouseleave";
}

canvas.addEventListener("mousemove", mm);
function mm(e) {
    var cx = e.clientX - canvas.offsetLeft ;
    var cy = e.clientY - canvas.offsetTop ;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color ;
        ctx.lineWidth = width ;
        ctx.moveTo(x,y);
        ctx.lineTo(cx,cy);
        ctx.stroke()
    }
    x = cx;
    y = cy;
}
function clear(){
    ctx.clearRect(0 , 0 , ctx.canvas.width , ctx.canvas.height);
}
width = screen.width ;
var height = screen.height ;
var Nwidth = width - 300 ; 
var Nheight = height - 70 ;
if (width < 992){
    document.getElementById("myCanvas").width = Nwidth ;
    document.getElementById("myCanvas").height = Nheight ;
    document.body.style.overflow = hidden ;
}
var touchEvent = "";
var x,y;
canvas.addEventListener("touchstart", ts);
function ts(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseEvent  = "touchstart";
    x = e.clientX - canvas.offsetLeft;
    y = e.clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", tm);
function tm(e) {
    var cx = e.clientX - canvas.offsetLeft ;
    var cy = e.clientY - canvas.offsetTop ;
    if (mouseEvent == "touchstart") {
        ctx.beginPath();
        ctx.strokeStyle = color ;
        ctx.lineWidth = width ;
        ctx.moveTo(x,y);
        ctx.lineTo(cx,cy);
        ctx.stroke()
    }
    x = cx;
    y = cy;
}