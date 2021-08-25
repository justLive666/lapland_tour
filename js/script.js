function check_breakpoints(){
    if(window.innerWidth<=800){
        $(".header__phone").appendTo($(".header__menu .menu__body"));
    }else{
        $(".header__phone").appendTo($(".header__container"));
    }

    if(window.innerWidth<=600){
        $(".features__image_3").appendTo($(".features__column_1"));
        $(".features__image_2").appendTo($(".features__column_2"));
    }else{
        $(".features__image_3").prependTo($(".features__column_2"));
        $(".features__image_2").appendTo($(".features__column_1"));
    }
}


check_breakpoints();
window.onresize = check_breakpoints;
if(window.onorientationchange){
    window.onorientationchange=check_breakpoints;
}

var header_burger = document.querySelector(".header__burger");
var header_menu = document.querySelector(".header__menu");
header_burger.addEventListener("click", () => {
    check_breakpoints();
    header_burger.classList.toggle("active");
    header_menu.classList.toggle("active");
    document.body.classList.toggle("block_overflow");
});

// trailer
var trailer = document.querySelector(".trailer-popup");
var trailer_body = document.querySelector(".trailer-popup__body");
var trailer_button = document.querySelector(".main-screen__button.trailer");
var close_trailer_button = document.querySelector(".trailer-popup__close");

function reloadFrame(iFrame) {
    var iframe_src = iFrame.src;
    iFrame.src = "";
    setTimeout(() => {
        iFrame.src = iframe_src;
    },100);
}

close_trailer_popup = () => {
    try{
        trailer.classList.remove("show");
        document.body.classList.remove("block_overflow");

        var iframe = document.querySelector(".trailer-popup__iframe");
        setTimeout(() => {reloadFrame(iframe);}, 1000);
        
    }catch{}
}

trailer_button.addEventListener("click", () => {
    trailer.classList.toggle("show");
    document.body.classList.toggle("block_overflow");
});

close_trailer_button.addEventListener("click", () => {
    close_trailer_popup();
});
trailer.addEventListener("click", (event) => {
    if(!event['path'].includes(trailer_body)){
        close_trailer_popup();
    }
})