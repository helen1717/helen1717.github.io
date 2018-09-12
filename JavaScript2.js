function $() 
{
var elements = new Array();
for (var i = 0; i < arguments.length; i++)
{var element = arguments[i];
if (typeof element == 'string')
element = document.getElementById(element);
if (arguments.length == 1)
return element;
elements.push(element);
}
return elements;}



function a1()
{
	$("bb").style.backgroundColor='rgb(0, 0, 0)';
}

function b1()
{
	$("bb").style.backgroundColor='red';
}

function c1()
{
	$("bb").style.backgroundColor='rgb(255, 127, 80)';
}

function d1()
{
	$("bb").style.backgroundColor='rgb(255, 255, 0)';
}

function e1()
{
	$("bb").style.backgroundColor='rgb(0, 250, 154)';
}

function h1()
{
	$("bb").style.backgroundColor='rgb(0, 255, 255)';
}
function s1()
{
	$("bb").style.backgroundColor='rgb(30, 144, 255)';
}
function o1()
{
	$("bb").style.backgroundColor='rgb(138, 43, 226)';
}


function f1()
{
	$("txt").value='ПРИВЕТ, МИР!';
}	