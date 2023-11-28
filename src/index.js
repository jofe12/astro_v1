
const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
   sideBar.classList.toggle('active');
   console.log('hola')
});

let Menulist = document.querySelectorAll(".Menulist li");
function activeLink() {
   Menulist.forEach((item) => item.classList.remove("active"));
   this.classList.add("active");
}
Menulist.forEach((item) => item.addEventListener("click", activeLink));