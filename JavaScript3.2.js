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

function f1()
{
alert('1111111');
N=parseFloat($('tx1').value);
A1=1;A2=2;
$('tx2').value='A1='+A1+';A2='+A2;
for(i=3;i<=N;i++)
{ A3=((A1+2*A2)/3);
$('tx2').value=$('tx2').value+';A'+i+'='+A3;
A1=A2;
A2=A3;}
}
