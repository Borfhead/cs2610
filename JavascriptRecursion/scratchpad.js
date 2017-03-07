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

function pellHelper(n)
{
    var value;
    var div = document.createElement('div');
    div.setAttribute('class', 'pell');
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
        p.textContent = "Pell(" + n + ") = " + value;
        div.appendChild(p);
    }
    else
    {
        var left = pellHelper(n-1);
        var temp = left.html.getAttribute('class');
        left.html.setAttribute('class', temp + ' pell-left');
        
        var right = pellHelper(n-2);
        temp = right.html.getAttribute('class');
        right.html.setAttribute('class', temp+ ' pell-right');
        
        value = (2 * left.value) + right.value;
        var p = document.createElement('p');
        p.textContent = 'Pell(' +n+ ') = ' +value;
        div.appendChild(p);
        
        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return {'value' : value, 'html' : div};
}

var pell = function(num, node)
{
    var tree = pellHelper(num);
    node.appendChild(tree.html);
    node.setAttribute('id', 'pell');
}

var style = document.createElement('style');
style.textContent = 
    "#fib {" +
	"	display: inline-block;" +
	"	width: 20000px;" +
    "   text-align:center;"+
    "   background-color: #90b4ed;"+
	"}" +
	"" +
    ".fib-left {" +
    "   float: left;"+
    "   display: inline-block;"+
    "   margin-right: 4px;"+
    "   text-align:center;"+
    "}"+
    ""+
    ".fib-right {" +
    "   float:right;"+
    "   display: inline-block;"+
    "   margin-left: 4px;"+
    "   text-align:center;"+
    "}"+
    ".fib-box {" +
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
	"}"+
    ""+
    "#pell {" +
	"	display: inline-block;" +
	"	width: 20000px;" +
    "   text-align:center;"+
    "   background-color: #7efcac;"+
	"}" +
	"" +
    ".pell-left {" +
    "   float: left;"+
    "   display: inline-block;"+
    "   margin-right: 4px;"+
    "   text-align:center;"+
    "}"+
    ""+
    ".pell-right {" +
    "   float:right;"+
    "   display: inline-block;"+
    "   margin-left: 4px;"+
    "   text-align:center;"+
    "}"+
    ".pell-box {" +
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
	"}";
document.body.appendChild(style);
var fibdiv = document.createElement('div');
fibdiv.setAttribute("class", "fib-box");
document.body.appendChild(fibdiv);

var pelldiv = document.createElement('div');
pelldiv.setAttribute("class", "pell-box");
document.body.appendChild(pelldiv);

fib(11, document.querySelector('.fib-box'));
pell(11, document.querySelector('.pell-box'));