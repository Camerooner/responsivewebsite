// function showMenu() {
//     document.getElementById('navigation').style.transform = "translateX(0%)";
//     document.getElementById('x-icon').style.display = "block";
//     document.getElementById('hamburger-icon').style.display = "none";
// }

// function hideMenu() {
//     document.getElementById('').style.transform = "translateX(100%)";
//     document.getElementById('x-icon').style.display = "none";
//     document.getElementById('hamburger-icon').style.display = "block";
//     // document.getElementById('navigation').style.transform = "none";

// }

// window.addEventListener("resize", hideButtons);

// function hideButton() {

//     if(window.innerWidth > 767) {
//         document.getElementById('x-icon').style.display = "none";
//         document.getElementById('hamburger-icon').style.display = "none";
//         document.getElementById('navigation').style.transform = "translateX(0%)";
//     }
    
//     else {
//         document.getElementById('hamburger-icon').style.display = "block";
//         document.getElementById('navigation').style.transform = "translateX(100%)";

//     }

// }

const primaryNav = document.getElementById('navigation');
const displayButton = documnt.getElementById('showNavigation');

displayButton.addEventListener("click", slideMenu);

function slideMEnu() {
    let visiblity = primaryNav.getAttribute('data-visible');

    console.log(visiblity);

    if(visiblity === "false") {
        primaryNav.setAttribute("data-visible", "true");
        // displayButton.setAttribute("data-variable")
    }
    else {
        primaryNav.setAttribute("data-visible", "false");
    }
    
}