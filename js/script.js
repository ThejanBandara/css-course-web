

function sidebarOpen(){
    var sidebar = document.getElementById("sidebar");
    var sidebarbg = document.getElementById("sidebar-close-bg");

    sidebar.classList.add("right-anim");
    sidebarbg.classList.add("btn-display");
}

function sidebarClose(){
    var sidebar = document.getElementById("sidebar");
    var sidebarbg = document.getElementById("sidebar-close-bg");

    sidebar.classList.remove("right-anim");
    sidebarbg.classList.remove("btn-display");
}