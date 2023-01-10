let sidebar = document.querySelector(".sidebar");
let toggler = document.querySelector("#sidebar-btn");

toggler.addEventListener("click", function () {
this.classList.toggle("open");
sidebar.classList.toggle("open");
});