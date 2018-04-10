// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
var canvas;
var gridheight;
var gridwidth;
var cell;
var row;
// Your code goes here!
canvas=$("#pixelCanvas");
gridheight=$("#inputHeight").val();
gridwidth=$("#inputWeight").val();
canvas.children().remove();
for(var i=0;i<gridheight;i++){
	canvas.append("<tr></tr>");
}
row=$("tr");
for (var i=0;i<gridwidth;i++){
	row.append("<td></td>");
}
cell=canvas.find("td");
cell.click(function(){
var color;
color=$("#colorPicker").val();
$(this).attr("bgcolor", color);
});
}
var gridgenerator= $('input[type="submit"]');
gridgenerator.click(function(event){
	event.preventDefault();
	makeGrid();
});

