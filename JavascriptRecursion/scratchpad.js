function fibhelper(n){
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "fib");
    if(n < 2){
        if(n === 0)
        {
            value = 0;
        }
        else if(n === 1)
        {
            value = 1;
        }
        var p = document.createElement('p');
        p.textContent = 'Fib(' +n+ ') = ' +value;
        div.appendChild(p);
    }
    
    else
    {
        var left = fibhelper(n - 1);
        var temp = left.html.getAttribute("class");
        left.html.setAttribute("class", temp +" fib-left");
        
        var right = fibhelper(n - 2);
        temp = right.html.getAttribute("class");
        right.html.setAttribute("class", temp +" fib-right");
        
        value = left.value + right.value;
        var p = document.createElement('p');
        p.textContent = 'Fib(' +n+ ') = ' +value;
        div.appendChild(p);
        
        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return {'value' : value, 'html' : div};
}

var fib = function(num, node)
{
    var tree = fibhelper(num);
    node.appendChild(tree.html);
    node.setAttribute('id', 'fib');
}

var style = document.createElement('style');
style.textContent = 
    "#fib {" +
	"	display: inline-block;" +
	"	width: 20000px;" +
    "   text-align:center;"+
	"}" +
	"" +
    ".fib-left {" +
    "   float: left;"+
    "   display: inline-block;"+
    "   margin-right: 4px"+
    "   text-align:center;"+
    "}"+
    ""+
    ".fib-right {" +
    "   float:right;"+
    "   display: inline-block;"+
    "   margin-left: 4px;"
    "   text-align:center;"+
    "}"+
    ".stuff-box {" +
	"	font-family: 'helvetica neue', helvetica, sans-serif;" +
	"	letter-spacing: 1px;" +
	"	text-transform: capitalize;" +
	"	text-align: center;" +
	"	padding: 3px 10px;" +
	"	margin: 10px;" +
	"	cursor: pointer;" +
	"	border-radius: 10px;" +
	"	border-width: 2px;" +
	"	border-style: solid;" +
    "";
document.body.appendChild(style);
var div = document.createElement('div');
div.setAttribute("class", "stuff-box");
document.body.appendChild(div);

fib(11, document.querySelector('.stuff-box'));