document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("intro-video");
    var content = document.getElementById("content");
    var overlay = document.getElementById("overlay");

    video.addEventListener("ended", function() {
        closeVideo();
    });

    overlay.addEventListener("click", function() {
        closeVideo();
    });

    function closeVideo() {
        video.style.display = "none";
        overlay.style.display = "none";
        content.style.filter = "none";
        content.style.display = "block";
    }
});



function canviarInici() {
    let inici = document.getElementById("pagina_inici");
    let historia = document.getElementById("pagina_historia");
    let vestit = document.getElementById("pagina_vestit");
    let famosos = document.getElementById("pagina_famosos");

    inici.style.display = "block";
    inici.classList.remove("d-none");
    historia.style.display = "none";
    historia.classList.add("d-none");
    vestit.style.display = "none";
    vestit.classList.add("d-none");
    famosos.style.display = "none";
    famosos.classList.add("d-none");

    let li_inici = document.getElementById("li_inici");
    let li_historia = document.getElementById("li_historia");
    let li_vestit = document.getElementById("li_vestit");
    let li_famosos = document.getElementById("li_famosos");

    li_inici.classList.remove("text-white");
    li_inici.classList.add("text-secondary");
    li_historia.classList.remove("text-secondary");
    li_historia.classList.add("text-white");
    li_vestit.classList.remove("text-secondary");
    li_vestit.classList.add("text-white");
    li_famosos.classList.remove("text-secondary");
    li_famosos.classList.add("text-white");
}

function canviarHistoria() {
    let inici = document.getElementById("pagina_inici");
    let historia = document.getElementById("pagina_historia");
    let vestit = document.getElementById("pagina_vestit");
    let famosos = document.getElementById("pagina_famosos");

    inici.style.display = "none";
    inici.classList.add("d-none");
    historia.style.display = "block";
    historia.classList.remove("d-none");
    vestit.style.display = "none";
    vestit.classList.add("d-none");
    famosos.style.display = "none";
    famosos.classList.add("d-none");

    let li_inici = document.getElementById("li_inici");
    let li_historia = document.getElementById("li_historia");
    let li_vestit = document.getElementById("li_vestit");
    let li_famosos = document.getElementById("li_famosos");

    li_historia.classList.remove("text-white");
    li_historia.classList.add("text-secondary");
    li_inici.classList.remove("text-secondary");
    li_inici.classList.add("text-white");
    li_vestit.classList.remove("text-secondary");
    li_vestit.classList.add("text-white");
    li_famosos.classList.remove("text-secondary");
    li_famosos.classList.add("text-white");
}

function canviarVestit() {
    let inici = document.getElementById("pagina_inici");
    let historia = document.getElementById("pagina_historia");
    let vestit = document.getElementById("pagina_vestit");
    let famosos = document.getElementById("pagina_famosos");

    inici.style.display = "none";
    inici.classList.add("d-none");
    historia.style.display = "none";
    historia.classList.add("d-none");
    vestit.style.display = "block";
    vestit.classList.remove("d-none");
    famosos.style.display = "none";
    famosos.classList.add("d-none");

    let li_inici = document.getElementById("li_inici");
    let li_historia = document.getElementById("li_historia");
    let li_vestit = document.getElementById("li_vestit");
    let li_famosos = document.getElementById("li_famosos");

    li_vestit.classList.remove("text-white");
    li_vestit.classList.add("text-secondary");
    li_inici.classList.remove("text-secondary");
    li_inici.classList.add("text-white");
    li_historia.classList.remove("text-secondary");
    li_historia.classList.add("text-white");
    li_famosos.classList.remove("text-secondary");
    li_famosos.classList.add("text-white");
}

function canviarFamosos() {
    let inici = document.getElementById("pagina_inici");
    let historia = document.getElementById("pagina_historia");
    let vestit = document.getElementById("pagina_vestit");
    let famosos = document.getElementById("pagina_famosos");

    inici.style.display = "none";
    inici.classList.add("d-none");
    historia.style.display = "none";
    historia.classList.add("d-none");
    vestit.style.display = "none";
    vestit.classList.add("d-none");
    famosos.style.display = "block";
    famosos.classList.remove("d-none");

    let li_inici = document.getElementById("li_inici");
    let li_historia = document.getElementById("li_historia");
    let li_vestit = document.getElementById("li_vestit");
    let li_famosos = document.getElementById("li_famosos");

    li_famosos.classList.remove("text-white");
    li_famosos.classList.add("text-secondary");
    li_inici.classList.remove("text-secondary");
    li_inici.classList.add("text-white");
    li_historia.classList.remove("text-secondary");
    li_historia.classList.add("text-white");
    li_vestit.classList.remove("text-secondary");
    li_vestit.classList.add("text-white");
}

function canviarInfluencia() {
    let influencia = document.getElementById("subpagina_historia_influencia");
    let antiga = document.getElementById("subpagina_historia_antiga");
    let or = document.getElementById("subpagina_historia_or");
    let modern = document.getElementById("subpagina_historia_modern");

    influencia.classList.remove("d-none");
    antiga.classList.add("d-none");
    or.classList.add("d-none");
    modern.classList.add("d-none");

    let div_influencia = document.getElementById("div_historia_influencia");
    let div_antiga = document.getElementById("div_historia_antiga");
    let div_or = document.getElementById("div_historia_or");
    let div_modern = document.getElementById("div_historia_modern");

    div_influencia.classList.add("border-danger", "text-danger");
    div_antiga.classList.remove("border-danger", "text-danger");
    div_or.classList.remove("border-danger", "text-danger");
    div_modern.classList.remove("border-danger", "text-danger");
}

function canviarAntiga() {
    let influencia = document.getElementById("subpagina_historia_influencia");
    let antiga = document.getElementById("subpagina_historia_antiga");
    let or = document.getElementById("subpagina_historia_or");
    let modern = document.getElementById("subpagina_historia_modern");

    antiga.classList.remove("d-none");
    influencia.classList.add("d-none");
    or.classList.add("d-none");
    modern.classList.add("d-none");

    let div_influencia = document.getElementById("div_historia_influencia");
    let div_antiga = document.getElementById("div_historia_antiga");
    let div_or = document.getElementById("div_historia_or");
    let div_modern = document.getElementById("div_historia_modern");

    div_antiga.classList.add("border-danger", "text-danger");
    div_influencia.classList.remove("border-danger", "text-danger");
    div_or.classList.remove("border-danger", "text-danger");
    div_modern.classList.remove("border-danger", "text-danger");
}

function canviarOr() {
    let influencia = document.getElementById("subpagina_historia_influencia");
    let antiga = document.getElementById("subpagina_historia_antiga");
    let or = document.getElementById("subpagina_historia_or");
    let modern = document.getElementById("subpagina_historia_modern");

    or.classList.remove("d-none");
    influencia.classList.add("d-none");
    antiga.classList.add("d-none");
    modern.classList.add("d-none");

    let div_influencia = document.getElementById("div_historia_influencia");
    let div_antiga = document.getElementById("div_historia_antiga");
    let div_or = document.getElementById("div_historia_or");
    let div_modern = document.getElementById("div_historia_modern");

    div_or.classList.add("border-danger", "text-danger");
    div_influencia.classList.remove("border-danger", "text-danger");
    div_antiga.classList.remove("border-danger", "text-danger");
    div_modern.classList.remove("border-danger", "text-danger");
}

function canviarModern() {
    let influencia = document.getElementById("subpagina_historia_influencia");
    let antiga = document.getElementById("subpagina_historia_antiga");
    let or = document.getElementById("subpagina_historia_or");
    let modern = document.getElementById("subpagina_historia_modern");

    modern.classList.remove("d-none");
    influencia.classList.add("d-none");
    antiga.classList.add("d-none");
    or.classList.add("d-none");

    let div_influencia = document.getElementById("div_historia_influencia");
    let div_antiga = document.getElementById("div_historia_antiga");
    let div_or = document.getElementById("div_historia_or");
    let div_modern = document.getElementById("div_historia_modern");

    div_modern.classList.add("border-danger", "text-danger");
    div_influencia.classList.remove("border-danger", "text-danger");
    div_antiga.classList.remove("border-danger", "text-danger");
    div_or.classList.remove("border-danger", "text-danger");
}