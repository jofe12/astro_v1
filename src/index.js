

let menutoggle = document.querySelector('.menutoggle');
let sidebar = document.querySelector('.sidebar');

menutoggle.onclick = function () {
    menutoggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}