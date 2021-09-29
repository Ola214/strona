const btn_intro = document.querySelector('#btn-intro');
btn_intro.addEventListener('click', clearContent);

function clearContent() {
    const btn_intro_section = document.querySelector('.btn-intro-section');
    const btn_intro = document.querySelector('#btn-intro');

    btn_intro.classList.add("active");

    setTimeout(function(){
        btn_intro_section.remove();
        const logo = document.querySelector('.logo');
        const bg_top = document.querySelector('.bg-top');
        const main_container = document.querySelector('.main-container');
    
        logo.remove();
        bg_top.classList.add("moving");
        setTimeout(function(){
            main_container.setAttribute('style', 'animation-play-state: paused;');
            const menu = document.querySelector('.menu');
            menu.setAttribute('style', 'display: flex;');
        }, 2000);
    }, 800);
}

const menu_hidden_button = document.querySelector('#menu-hidden-button');
menu_hidden_button.addEventListener('click', showHiddenMenu);

function showHiddenMenu() {

    const bg_top = document.querySelector('.bg-top');

    const menu_hidden_right = document.querySelector(".menu-hidden-right");

    if(document.querySelector(".show-menu-hidden-right") == null) {
        menu_hidden_right.classList.add("show-menu-hidden-right");
        menu_hidden_right.classList.remove("hide-menu-hidden-right");
        menu_hidden_right.setAttribute('style', 'display: flex;');

        const menu_hidden_left = document.querySelector(".menu-hidden-left");
        menu_hidden_left.classList.add("show-menu-hidden-left");
        menu_hidden_left.classList.remove("hide-menu-hidden-left");
        menu_hidden_left.setAttribute('style', 'display: flex;');

        setTimeout(function() {
            const menu_hidden_img = document.querySelector("#menu-hidden-img");
            menu_hidden_img.setAttribute('style', 'display: block;');
        }, 1000);
    } else {
        hideHiddenMenu();
    }
    
}

const menu_hidden_button_2 = document.querySelector('#menu-hidden-button-2');
menu_hidden_button_2.addEventListener('click', hideHiddenMenu);

function hideHiddenMenu() {
    const menu_hidden_img = document.querySelector("#menu-hidden-img");
    menu_hidden_img.setAttribute('style', 'display: none;');

    const menu_hidden_left = document.querySelector(".menu-hidden-left");
    menu_hidden_left.classList.add("hide-menu-hidden-left");

    const menu_hidden_right = document.querySelector(".menu-hidden-right");
    menu_hidden_right.classList.add("hide-menu-hidden-right");
    
    setTimeout(function() {
        menu_hidden_left.classList.remove("show-menu-hidden-left");
        menu_hidden_right.classList.remove("show-menu-hidden-right");
        menu_hidden_left.setAttribute('style', 'display: none;');
        menu_hidden_right.setAttribute('style', 'display: none;');
    }, 1000);
}

