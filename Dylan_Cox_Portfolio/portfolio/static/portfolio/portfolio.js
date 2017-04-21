function hover(element){
    switch(element.id){
        case "fb_icon": 
            element.setAttribute('src', '/static/portfolio/images/fb_color.png');
            break;
        case "in_icon":
            element.setAttribute('src', '/static/portfolio/images/in_color.png');
            break;
        case "gh_icon":
            element.setAttribute('src', '/static/portfolio/images/gh_color.png');
            break;
    }
        
}

function unhover(element, newSrc){
    switch(element.id){
        case "fb_icon": 
            element.setAttribute('src', '/static/portfolio/images/fb_gray.png');
            break;
        case "in_icon":
            element.setAttribute('src', '/static/portfolio/images/in_gray.png');
            break;
        case "gh_icon":
            element.setAttribute('src', '/static/portfolio/images/gh_gray.png');
            break;
    }
}