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
    historia.style.display = "none";
    vestit.style.display = "none";
    famosos.style.display = "none";

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
    historia.style.display = "block";
    vestit.style.display = "none";
    famosos.style.display = "none";

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
    historia.style.display = "none";
    vestit.style.display = "block";
    famosos.style.display = "none";

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
    historia.style.display = "none";
    vestit.style.display = "none";
    famosos.style.display = "block";

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