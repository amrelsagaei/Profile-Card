/*
                            Note: This was a YouTube tutorial... i retyped in my way.                   
Author: Amr Elsagaei                                                                       */

const toggleSwitch = document.querySelector("input[type='checkbox']");

function switchTheme (e){
    if (e.target.checked){
        document.documentElement.setAttribute("data-theme","dark");
    }
    else {
        document.documentElement.removeAttribute("data-theme");
    }
}
toggleSwitch.addEventlistener("change", switchTheme);