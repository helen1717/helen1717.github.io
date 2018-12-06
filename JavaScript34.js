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

function f2()
{
	
		
alert('33333333333333');
var A = parseInt(document.getElementById('A').value),
 K = 0, Summ = 0;
			


while (Summ < A) Summ += (1/ ++K);
		
		

$('K').value = K-1;
		

$('Summ').value = Summ-1/K;


	
	
}