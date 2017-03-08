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


function tribHelper(n)
{
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "trib");
    if(n <= 2)
    {
        if(n === 0 || n ===1)
        {
            value = 0;
        }
        else if(n ===2)
        {
            value = 1;
        }
        var p = document.createElement('p');
        p.textContent = 'Trib(' +n+ ') = ' +value;
        div.appendChild(p);
    }
    else
    {
        var left = tribHelper(n-1);
        var temp = left.html.getAttribute('class');
        left.html.setAttribute('class', temp + ' trib-left');
        
        var center = tribHelper(n-2);
        temp = center.html.getAttribute('class');
        center.html.setAttribute('class', temp+ ' trib-center');
        
        var right = tribHelper(n-3);
        temp = right.html.getAttribute('class');
        right.html.setAttribute('class', temp+ ' trib-right');
        
        value = left.value + center.value + right.value;
        var p = document.createElement('p');
        p.textContent = 'Trib(' +n+ ') = ' +value;
        div.appendChild(p);
        
        div.appendChild(left.html);
        div.appendChild(center.html);
        div.appendChild(right.html);
    }
    return {'value' : value, 'html' : div};
}

var trib = function(num, node)
{
    var tree = tribHelper(num);
    node.appendChild(tree.html);
    node.setAttribute('id', 'trib');
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
	"}"+
	""+
	"#trib {" +
	"	display: inline-block;" +
	"	width: 20000px;" +
    "   text-align:center;"+
    "   background-color: #ff7575;"+
	"}" +
	"" +
    ".trib-left {" +
    "   float: left;"+
    "   display: inline-block;"+
    "   margin-right: 4px;"+
    "   text-align:center;"+
    "   width: 33%;"+
    "}"+
    ""+
    ".trib-center {"+
    "   display: inline-block;"+
    "   margin: 4px;"+
    "   width: 33%"+
    "}"+
    ""+
    ".trib-right {" +
    "   float:right;"+
    "   display: inline-block;"+
    "   margin-left: 4px;"+
    "   text-align:center;"+
    "   width: 33%;"+
    "}"+
    ".trib-box {" +
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

var tribdiv = document.createElement('div');
tribdiv.setAttribute("class", "trib-box");
document.body.appendChild(tribdiv);

fib(11, document.querySelector('.fib-box'));
pell(11, document.querySelector('.pell-box'));
trib(11, document.querySelector('.trib-box'));