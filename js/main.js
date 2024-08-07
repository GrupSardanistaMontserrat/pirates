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
    //let famosos = document.getElementById("pagina_famosos");
    let joc = document.getElementById("pagina_joc");
    let tresor = document.getElementById("pagina_tresor");

    inici.style.display = "block";
    inici.classList.remove("d-none");
    historia.style.display = "none";
    historia.classList.add("d-none");
    vestit.style.display = "none";
    vestit.classList.add("d-none");
    //famosos.style.display = "none";
    //famosos.classList.add("d-none");
    joc.style.display = "none";
    joc.classList.add("d-none");
    tresor.style.display = "none";
    tresor.classList.remove("d-none");

    let li_inici = document.getElementById("li_inici");
    let li_historia = document.getElementById("li_historia");
    let li_vestit = document.getElementById("li_vestit");
    //let li_famosos = document.getElementById("li_famosos");
    let li_joc = document.getElementById("li_joc");
    let li_tresor = document.getElementById("li_tresor");

    li_inici.classList.remove("text-white");
    li_inici.classList.add("text-secondary");
    li_historia.classList.remove("text-secondary");
    li_historia.classList.add("text-white");
    li_vestit.classList.remove("text-secondary");
    li_vestit.classList.add("text-white");
    //li_famosos.classList.remove("text-secondary");
    //li_famosos.classList.add("text-white");
    li_joc.classList.remove("text-secondary");
    li_joc.classList.add("text-white");
    li_tresor.classList.remove("text-secondary");
    li_tresor.classList.add("text-white");
}

function canviarHistoria() {
    let inici = document.getElementById("pagina_inici");
    let historia = document.getElementById("pagina_historia");
    let vestit = document.getElementById("pagina_vestit");
    //let famosos = document.getElementById("pagina_famosos");
    let joc = document.getElementById("pagina_joc");
    let tresor = document.getElementById("pagina_tresor");

    inici.style.display = "none";
    inici.classList.add("d-none");
    historia.style.display = "block";
    historia.classList.remove("d-none");
    vestit.style.display = "none";
    vestit.classList.add("d-none");
    //famosos.style.display = "none";
    //famosos.classList.add("d-none");
    joc.style.display = "none";
    joc.classList.add("d-none");
    tresor.style.display = "none";
    tresor.classList.remove("d-none");

    let li_inici = document.getElementById("li_inici");
    let li_historia = document.getElementById("li_historia");
    let li_vestit = document.getElementById("li_vestit");
    //let li_famosos = document.getElementById("li_famosos");
    let li_joc = document.getElementById("li_joc");

    li_historia.classList.remove("text-white");
    li_historia.classList.add("text-secondary");
    li_inici.classList.remove("text-secondary");
    li_inici.classList.add("text-white");
    li_vestit.classList.remove("text-secondary");
    li_vestit.classList.add("text-white");
    //li_famosos.classList.remove("text-secondary");
    //li_famosos.classList.add("text-white");
    li_joc.classList.remove("text-secondary");
    li_joc.classList.add("text-white");
    li_tresor.classList.remove("text-secondary");
    li_tresor.classList.add("text-white");
}

function canviarVestit() {
    let inici = document.getElementById("pagina_inici");
    let historia = document.getElementById("pagina_historia");
    let vestit = document.getElementById("pagina_vestit");
    //let famosos = document.getElementById("pagina_famosos");
    let joc = document.getElementById("pagina_joc");
    let tresor = document.getElementById("pagina_tresor");

    inici.style.display = "none";
    inici.classList.add("d-none");
    historia.style.display = "none";
    historia.classList.add("d-none");
    vestit.style.display = "block";
    vestit.classList.remove("d-none");
    //famosos.style.display = "none";
    //famosos.classList.add("d-none");
    joc.style.display = "none";
    joc.classList.add("d-none");
    tresor.style.display = "none";
    tresor.classList.remove("d-none");

    let li_inici = document.getElementById("li_inici");
    let li_historia = document.getElementById("li_historia");
    let li_vestit = document.getElementById("li_vestit");
    //let li_famosos = document.getElementById("li_famosos");
    let li_joc = document.getElementById("li_joc");

    li_vestit.classList.remove("text-white");
    li_vestit.classList.add("text-secondary");
    li_inici.classList.remove("text-secondary");
    li_inici.classList.add("text-white");
    li_historia.classList.remove("text-secondary");
    li_historia.classList.add("text-white");
    //li_famosos.classList.remove("text-secondary");
    //li_famosos.classList.add("text-white");
    li_joc.classList.remove("text-secondary");
    li_joc.classList.add("text-white");
    li_tresor.classList.remove("text-secondary");
    li_tresor.classList.add("text-white");
}

function canviarFamosos() {
    let inici = document.getElementById("pagina_inici");
    let historia = document.getElementById("pagina_historia");
    let vestit = document.getElementById("pagina_vestit");
    //let famosos = document.getElementById("pagina_famosos");
    let joc = document.getElementById("pagina_joc");
    let tresor = document.getElementById("pagina_tresor");

    inici.style.display = "none";
    inici.classList.add("d-none");
    historia.style.display = "none";
    historia.classList.add("d-none");
    vestit.style.display = "none";
    vestit.classList.add("d-none");
    //famosos.style.display = "block";
    //famosos.classList.remove("d-none");
    joc.style.display = "none";
    joc.classList.add("d-none");
    tresor.style.display = "none";
    tresor.classList.remove("d-none");

    let li_inici = document.getElementById("li_inici");
    let li_historia = document.getElementById("li_historia");
    let li_vestit = document.getElementById("li_vestit");
    //let li_famosos = document.getElementById("li_famosos");
    let li_joc = document.getElementById("li_joc");

    //li_famosos.classList.remove("text-white");
    //li_famosos.classList.add("text-secondary");
    li_inici.classList.remove("text-secondary");
    li_inici.classList.add("text-white");
    li_historia.classList.remove("text-secondary");
    li_historia.classList.add("text-white");
    li_vestit.classList.remove("text-secondary");
    li_vestit.classList.add("text-white");
    li_joc.classList.remove("text-secondary");
    li_joc.classList.add("text-white");
    li_tresor.classList.remove("text-secondary");
    li_tresor.classList.add("text-white");
}

function canviarJoc() {
    let inici = document.getElementById("pagina_inici");
    let historia = document.getElementById("pagina_historia");
    let vestit = document.getElementById("pagina_vestit");
    //let famosos = document.getElementById("pagina_famosos");
    let joc = document.getElementById("pagina_joc");
    let tresor = document.getElementById("pagina_tresor");

    inici.style.display = "none";
    inici.classList.add("d-none");
    historia.style.display = "none";
    historia.classList.add("d-none");
    vestit.style.display = "none";
    vestit.classList.add("d-none");
    //famosos.style.display = "none";
    //famosos.classList.add("d-none");
    joc.style.display = "block";
    joc.classList.remove("d-none");
    tresor.style.display = "none";
    tresor.classList.remove("d-none");

    let li_inici = document.getElementById("li_inici");
    let li_historia = document.getElementById("li_historia");
    let li_vestit = document.getElementById("li_vestit");
    //let li_famosos = document.getElementById("li_famosos");
    let li_joc = document.getElementById("li_joc");

    li_joc.classList.remove("text-white");
    li_joc.classList.add("text-secondary");
    //li_famosos.classList.remove("text-secondary");
    //li_famosos.classList.add("text-white");
    li_inici.classList.remove("text-secondary");
    li_inici.classList.add("text-white");
    li_historia.classList.remove("text-secondary");
    li_historia.classList.add("text-white");
    li_vestit.classList.remove("text-secondary");
    li_vestit.classList.add("text-white");
    li_tresor.classList.remove("text-secondary");
    li_tresor.classList.add("text-white");
}

function canviarTresor() 
{
    let inici = document.getElementById("pagina_inici");
    let historia = document.getElementById("pagina_historia");
    let vestit = document.getElementById("pagina_vestit");
    //let famosos = document.getElementById("pagina_famosos");
    let joc = document.getElementById("pagina_joc");
    let tresor = document.getElementById("pagina_tresor");

    inici.style.display = "none";
    inici.classList.add("d-none");
    historia.style.display = "none";
    historia.classList.add("d-none");
    vestit.style.display = "none";
    vestit.classList.add("d-none");
    //famosos.style.display = "none";
    //famosos.classList.add("d-none");
    joc.style.display = "none";
    joc.classList.remove("d-none");
    tresor.style.display = "block";
    tresor.classList.remove("d-none");

    let li_inici = document.getElementById("li_inici");
    let li_historia = document.getElementById("li_historia");
    let li_vestit = document.getElementById("li_vestit");
    //let li_famosos = document.getElementById("li_famosos");
    let li_joc = document.getElementById("li_joc");
    let li_tresor = document.getElementById("li_tresor");

    li_joc.classList.remove("text-secondary");
    li_joc.classList.add("text-white");
    li_tresor.classList.remove("text-white");
    li_tresor.classList.add("text-secondary");
    //li_famosos.classList.remove("text-secondary");
    //li_famosos.classList.add("text-white");
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





// PANTALLA DE JOC

let treasureFound = false;

// Coordenades del tresor (exemple)
let treasureX = Math.random() * 600; // Posició aleatòria
let treasureY = Math.random() * 400; // Posició aleatòria

const canvas = document.getElementById('mapCanvas');
const ctx = canvas.getContext('2d');

// Carregar i dibuixar la imatge de fons
const backgroundImage = new Image();
backgroundImage.src = 'img/mapa.png'; // Ruta a la teva imatge de fons
backgroundImage.onload = function() {
    drawMap();
};

// Dibuixar el mapa pre-dibujat
function drawMap() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before drawing
    // Dibuixar la imatge de fons
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
}





















// Dibuixar el tresor
function drawTreasure(x, y) {
    ctx.fillStyle = 'gold'; // Color del tresor
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2); // Dibuixar un cercle per representar el tresor
    ctx.fill();
}

// Dibuixar l'àrea incorrecta
function drawIncorrectArea(x, y) {
    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'; // Vermell semitransparent
    ctx.fillRect(x - 10, y - 10, 20, 20); // Dibuixar un quadrat centrat al voltant del punt de clic
}

// Funció que es crida quan es fa clic al canvas o es toca en dispositius mòbils
function handleClickOrTouch(event) {
    if (!treasureFound) {
        const rect = canvas.getBoundingClientRect();
        let x, y;
        if (event.type === 'click') {
            x = (event.clientX - rect.left) * (canvas.width / rect.width);
            y = (event.clientY - rect.top) * (canvas.height / rect.height);
        } else if (event.type === 'touchstart') {
            // Prevenir comportament per defecte de la pàgina
            event.preventDefault();
            // Calcular les coordenades relatives al canvas
            const touch = event.touches[0] || event.changedTouches[0];
            x = (touch.clientX - rect.left) * (canvas.width / rect.width);
            y = (touch.clientY - rect.top) * (canvas.height / rect.height);
        }
        handleClick(x, y);
    }
}

// Event listener per fer clic al canvas (per a ratolí)
canvas.addEventListener('click', handleClickOrTouch);
// Event listener per tocar el canvas (per a dispositius tàctils)
canvas.addEventListener('touchstart', handleClickOrTouch);

// Funció que es crida quan es fa clic al canvas
function handleClick(x, y) {
    const distance = Math.sqrt(Math.pow(x - treasureX, 2) + Math.pow(y - treasureY, 2));
    if (distance < 30) { // Ajusta el radi de detecció del tresor segons el teu mapa
        // Mostrar el tresor
        drawTreasure(treasureX, treasureY);
        document.getElementById('hint').textContent = 'Felicitats! Has trobat el tresor pirata!';
        treasureFound = true;
        document.getElementById('restartButton').style.visibility = 'visible';
    } else {
        // Marcar l'àrea incorrecta
        drawIncorrectArea(x, y);

        // Indicar direcció aproximada
        let hint = '';

        if (Math.abs(x - treasureX) < 30 && Math.abs(y - treasureY) < 30) { // Si el clic està a prop del tresor en ambdós eixos
            hint += 'Estàs molt a prop del tresor.';
        } else {
            if (Math.abs(x - treasureX) < 30) { // Si el clic està a prop del tresor en l'eix x
                hint += '<i class="fa-solid fa-grip-lines-vertical"></i> Continua en el mateix eix Y, ';
            } else {
                if (x < treasureX) {
                    hint += '<i class="fas fa-arrow-right"></i> Més a la dreta del mapa, ';
                } else {
                    hint += '<i class="fas fa-arrow-left"></i> Més a l\'esquerra del mapa, ';
                }
            }

            if (Math.abs(y - treasureY) < 30) { // Si el clic està a prop del tresor en l'eix y
                hint += '<i class="fa-solid fa-grip-lines"></i> Continua en el mateix eix X.';
            } else {
                if (y < treasureY) {
                    hint += '<i class="fas fa-arrow-down"></i> Més avall del mapa.';
                } else {
                    hint += '<i class="fas fa-arrow-up"></i> Més amunt del mapa.';
                }
            }
        }

        document.getElementById('hint').innerHTML = hint;
    }
}

// Event listener per reiniciar el joc
document.getElementById('restartButton').addEventListener('click', function() {
    treasureFound = false;
    treasureX = Math.random() * 600; // Posició aleatòria
    treasureY = Math.random() * 400; // Posició aleatòria
    drawMap();
    document.getElementById('hint').textContent = '';
    document.getElementById('restartButton').style.visibility = 'hidden';
});

// Dibuixar el mapa inicial
backgroundImage.onload = drawMap;