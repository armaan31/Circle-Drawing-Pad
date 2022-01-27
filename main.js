var mouseevent="empty";   //to declare the mouse event as null initally
var canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
//Two lines above are ALWAYS nessasary for all canvas projects
color="black";   //Defalt color
width=1;   //Defalt width
canvas.addEventListener("mousedown", mymousedown);
//line number 7 is to add an event listener looks out for mouse action changes
function mymousedown(e){   //mouseclick event on the canvas
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseevent="mousedown";
}
canvas.addEventListener("mousemove", mymousemove);   //action when mouse moves
function mymousemove(e){
    cx=e.clientX-canvas.offsetLeft;   //current x position of mouse
    cy=e.clientY-canvas.offsetTop;   //current y position of mouse
    if (mouseevent=="mousedown"){
        ctx.beginPath();   //begin drawing
        ctx.strokeStyle=color;   //use the color from text input
        ctx.lineWidth=width;   //use the width from text input
        ctx.arc(cx,cy,radius,0,2*Math.PI);
        ctx.stroke();   //display the circle
    }
}
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e){
    mouseevent="mouseleave";
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    document.getElementById("color").value=null;
    document.getElementById("width").value=null;
    document.getElementById("radius").value=null;
}