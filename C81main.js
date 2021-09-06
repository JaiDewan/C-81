canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
x=e.clientX-canvas.offsetLeft;
y=e.clientY-canvas.offsetTop;
circle(x,y);
} 
function circle(x,y) {
ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle=color;
ctx.arc(x,y,40,0,2*Math.PI);
ctx.stroke();    
}