let togglerBtn = document.querySelector("nav .togglerBtn");

togglerBtn.addEventListener("click", sidebarOpen);


function sidebarOpen() {
   let sidebar = document.querySelector(".SideBar");
   sidebar.classList.toggle("activeSideBar");
}