function mostrarMapa() {
    $("#iconoMap").addClass("svg-icon-hidden");
    $("#iconoMap").removeClass("svg-icon");
    $("#imgMap").removeClass("svg-icon-hidden");
    $("#imgMap").addClass("visibleImg");
}

document.getElementById('iconoMap').addEventListener('click', () => {
    mostrarMapa();
})