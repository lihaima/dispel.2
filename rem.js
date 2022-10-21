;(function rem(){
    let viewWidth = document.documentElement.clientWidth || window.innerWidth
    if(viewWidth >= 1024) {
        viewWidth = 1024
    }else if(viewWidth <= 160){
        viewWidth = 160
    }
    document.documentElement.style.fontSize = (viewWidth/375*1)+"px";
})();