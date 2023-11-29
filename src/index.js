
// Activa boton del menu para mostrar ou ocultar menu
const menuBar = document.querySelector('.Navbar nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
   sideBar.classList.toggle('active');
 
});

//  cambio de colores en sidebar
let Menulist = document.querySelectorAll(".Menulist li");
function activeLink() {
   Menulist.forEach((item) => item.classList.remove("active"));
   this.classList.add("active");
}
Menulist.forEach((item) => item.addEventListener("click", activeLink));



const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});