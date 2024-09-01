document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const catName = urlParams.get('catName');
    if (catName) {
        document.getElementById('cat-name').value = catName;
    }
});