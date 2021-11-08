
function cierraOtroModal() {
    document.getElementById("otroModal").style.display = 'none';
}

document.onopen = function() {
    document.getElementById("otroModal").style.display = 'block';
};

function muestraMyModal() {
    document.getElementById('myModal').style.display = 'block';
}

function cierraMyModal() {
    document.getElementById('myModal').style.display = "none";
}