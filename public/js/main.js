let lang = navigator.language.slice(0, 2)

if (lang === 'en') {
    document.querySelectorAll('.second-lanuge').forEach(elem => elem.style.display = 'none');
} else {
    document.querySelectorAll('.english').forEach(elem => elem.style.display = 'none');
}

var navList = document.getElementById("nav-lists");
function Show() {
navList.classList.add("_Menus-show");
}

function Hide(){
navList.classList.remove("_Menus-show");
}
