﻿﻿function $() 
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
        a=parseFloat($('tx1').value);
	b=parseFloat($('tx2').value);
        c=parseFloat($('tx3').value);
        x1=a;
        x2=b;
        x3=c;
	if((a>b)&(a>c))
{$('txt').value=''+a;
}
        else if((b>a)&(b>c))
{$('txt').value=''+b;
}

         else
{$('txt').value=''+c;
}
}
    function f1()
{
        a=parseFloat($('tx1').value);
	b=parseFloat($('tx2').value);
        c=parseFloat($('tx3').value);
        x1=a;
        x2=b;
        x3=c;
	if((a<b)&(a<c))
{$('txt').value=''+a;
}
 else if((b<a)&(b<c))
{$('txt').value=''+b;
}

         else
{$('txt').value=''+c;
}
}
