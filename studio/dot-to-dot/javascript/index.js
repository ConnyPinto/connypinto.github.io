$(document).ready(function(){
    
  var canvas = document.getElementById('drawing');
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  var FirstClickX ;
  var FirstClickY ;
  
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

drawGrid(5);

    $("circle").click(function(e){
       
       console.log(e)
       
  console.log(e.pageX)
  console.log(e.pageY)
   
   if (!FirstClickX){
     FirstClickX = e.pageX;
     FirstClickY = e.pageY;
   }
   
   else{
      drawLine(FirstClickX,FirstClickY,e.pageX,e.pageY)
      FirstClickX = null
      FirstClickY = null
   }
        
    });
    

}

function drawLine (x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.closePath();
    ctx.stroke(); //set color and stroke size here//
}

function drawCircle(radius) {
  var div = document.createElement('div');
  $('.grid').append(div);

  var svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg1.setAttribute("height", radius * 2);
  svg1.setAttribute("width", radius * 2);
  div.appendChild(svg1);
  
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", radius);
  circle.setAttribute("cy", radius);
  circle.setAttribute("r", radius);
  svg1.appendChild(circle);
}

function drawGrid(radius) {
  for (var i = 0; i < 2100; i++) {
    drawCircle(radius);
  }
}

    
});