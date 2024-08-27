function MoreLess(){
    var dots = document.getElementById("dots");
    var invisible = document.getElementById("invisible-text");
    var btnText = document.getElementById("btn");
    if(dots.style.display != "none"){
        dots.style.display = "none";
        invisible.style.display="inline";
        btnText.innerHTML = "Read Less";
    }
    else{
        dots.style.display = "inline";
        invisible.style.display="none";
        btnText.innerHTML = "Read More";
    }
}