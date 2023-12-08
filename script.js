const sidebar = document.querySelector('.sidebar');
const sidebarCloseBtn = document.querySelector('.close-sidebar');

sidebarCloseBtn.onclick = () => {
    sidebar.classList.remove('active');
}