function toggleDashboard() {
    const dashboard = document.querySelector('.dashboard');
    dashboard.classList.toggle('open');

    const mainContent = document.querySelector('main');
    if (dashboard.classList.contains('open')) {
        mainContent.style.marginLeft = '200px'; // Adjust if needed
    } else {
        mainContent.style.marginLeft = '0';
    }
}
