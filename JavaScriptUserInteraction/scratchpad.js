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
};

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
};


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
};


//Creates the slider that changes the fib section
var fibSlider = document.createElement("INPUT");
fibSlider.setAttribute('type', 'range');
fibSlider.setAttribute('value', '6');
fibSlider.setAttribute('min', 1);
fibSlider.setAttribute('max', 11);
fibSlider.onchange = function(){
    var btn = document.getElementById('fibButton');
    btn.childNodes[0].nodeValue = "Fib(" +fibSlider.value+ ")";
};
document.body.appendChild(fibSlider);

//Creates the button to update the fib section
var fibButton = document.createElement("BUTTON");
var btnText = document.createTextNode("Fib(" +fibSlider.value+ ")");
fibButton.appendChild(btnText);
fibButton.setAttribute('id', 'fibButton');
fibButton.onclick = function(){
    document.querySelector('.fib-box').innerHTML = "";
    fib(fibSlider.value, document.querySelector('.fib-box'));
};
document.body.appendChild(fibButton);


var fibdiv = document.createElement('div');
fibdiv.setAttribute("class", "fib-box");
document.body.appendChild(fibdiv);


//Creates the slider to update the pell section
var pellSlider = document.createElement("INPUT");
pellSlider.setAttribute('type', 'range');
pellSlider.setAttribute('value', '6');
pellSlider.setAttribute('min', 1);
pellSlider.setAttribute('max', 11);
pellSlider.onchange = function(){
    var btn = document.getElementById('pellButton');
    btn.childNodes[0].nodeValue = "pell(" +pellSlider.value+ ")";
};
document.body.appendChild(pellSlider);

//Creates the button to update the pell section
var pellButton = document.createElement("BUTTON");
var btnText = document.createTextNode("pell(" +pellSlider.value+ ")");
pellButton.appendChild(btnText);
pellButton.setAttribute('id', 'pellButton');
pellButton.onclick = function(){
    document.querySelector('.pell-box').innerHTML = "";
    pell(pellSlider.value, document.querySelector('.pell-box'));
};
document.body.appendChild(pellButton);

var pelldiv = document.createElement('div');
pelldiv.setAttribute("class", "pell-box");
document.body.appendChild(pelldiv);

//Creates the slider to update the trib section
var tribSlider = document.createElement("INPUT");
tribSlider.setAttribute('type', 'range');
tribSlider.setAttribute('value', '6');
tribSlider.setAttribute('min', 1);
tribSlider.setAttribute('max', 11);
tribSlider.onchange = function(){
    var btn = document.getElementById('tribButton');
    btn.childNodes[0].nodeValue = "trib(" +tribSlider.value+ ")";
};
document.body.appendChild(tribSlider);

//Creates the button to update the trib section
var tribButton = document.createElement("BUTTON");
var btnText = document.createTextNode("trib(" +tribSlider.value+ ")");
tribButton.appendChild(btnText);
tribButton.setAttribute('id', 'tribButton');
tribButton.onclick = function(){
    document.querySelector('.trib-box').innerHTML = "";
    trib(tribSlider.value, document.querySelector('.trib-box'));
};
document.body.appendChild(tribButton);

var tribdiv = document.createElement('div');
tribdiv.setAttribute("class", "trib-box");
document.body.appendChild(tribdiv);

fib(fibSlider.value, document.querySelector('.fib-box'));
pell(pellSlider.value, document.querySelector('.pell-box'));
trib(tribSlider.value, document.querySelector('.trib-box'));