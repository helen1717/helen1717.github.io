﻿function $() 
{ var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{ var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; }

var t;
var r1= 255;
var g1= 255;
var b1= 0;
function f()
	{	
		var e = document.getElementById('a1');
		e.style.top=(parseInt(e.style.top)+10)+'px';
		//alert(e.style.top);
		if(parseInt(e.style.top) <=0)
			{
				s();
			} 
		g1 = g1-6;
		color ='rgb('+r1+', '+g1+', '+b1+')';
		e.style.backgroundColor= color;
	}

function r()
	{
		var x = document.getElementById('a1');
		x.style.top = "0px";
		t = setInterval('f()',100);
	}
function s()
	{
		clearInterval(t);
	}
