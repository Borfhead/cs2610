function fibhelper(n){
    var value;
    var div = document.createElement('div');
    if(n < 2){
        if(n == 0)
        {
            value = 0;
        }
        else if(n == 1)
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
        var right = fibhelper(n - 2);
        
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
}
//fib(6, document.body);