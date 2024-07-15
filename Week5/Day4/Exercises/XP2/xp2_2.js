function myMove() {
    var element = document.getElementById("animate");
    var container = document.getElementById("container");
    var position = 0;
    var id = setInterval(frame, 1);
    
    function frame() {
        if (pos == container.offsetWidth - elem.offsetWidth) {
            clearInterval(id);
        } else {
            pos++;
            element.style.left = position + 'px';
        }
    }
}



