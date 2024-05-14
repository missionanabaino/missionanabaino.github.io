function toggleOverlay() {
    var overlay = document.getElementById("overlayMenu");
    if (overlay.style.width === '100%') {
        overlay.style.width = '0%';
    } else {
        overlay.style.width = '100%';
    }
}

