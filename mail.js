let ekipa = "";
let lider = "";

let p1_name = "";
let p1_face = "";
let p1_prezime = "";

let p2_name = "";
let p2_face = "";
let p2_prezime = "";

let p3_name = "";
let p3_face = "";
let p3_prezime = "";

let p4_name = "";
let p4_face = "";
let p4_prezime = "";

let p5_name = "";
let p5_face = "";
let p5_prezime = "";

function updateText() {
    ekipa = document.getElementById('ekipa').value;
    lider = document.getElementById('lider').value;

    p1_name = document.getElementById('p1_name').value;
    p1_face = document.getElementById('p1_face').value;
    p1_prezime = document.getElementById('p1_prezime').value;

    p2_name = document.getElementById('p2_name').value;
    p2_face = document.getElementById('p2_face').value;
    p2_prezime = document.getElementById('p2_prezime').value;

    p3_name = document.getElementById('p3_name').value;
    p3_face = document.getElementById('p3_face').value;
    p3_prezime = document.getElementById('p3_prezime').value;

    p4_name = document.getElementById('p4_name').value;
    p4_face = document.getElementById('p4_face').value;
    p4_prezime = document.getElementById('p4_prezime').value;

    p5_name = document.getElementById('p5_name').value;
    p5_face = document.getElementById('p5_face').value;
    p5_prezime = document.getElementById('p5_prezime').value;
}

function mail()
{
    let message = "Ime ekipe: " + ekipa + "<BR>Lider: " + lider + "<BR>Igraci:<BR>" +
    "1. " + p1_name + " " + p1_prezime + " Faceit link: " + p1_face + "<BR>" +
    "2. " + p2_name + " " + p2_prezime + " Faceit link: " + p2_face + "<BR>" +
    "3. " + p3_name + " " + p3_prezime + " Faceit link: " + p3_face + "<BR>" +
    "4. " + p4_name + " " + p4_prezime + " Faceit link: " + p4_face + "<BR>" +
    "5. " + p5_name + " " + p5_prezime + " Faceit link: " + p5_face + "<BR>";

    if(ekipa == "" || lider == "" ||
    p1_name == "" || p1_prezime == "" || p1_face == "" ||
    p2_name == "" || p2_prezime == "" || p2_face == "" ||
    p3_name == "" || p3_prezime == "" || p3_face == "" ||
    p4_name == "" || p4_prezime == "" || p4_face == "" ||
    p5_name == "" || p5_prezime == "" || p5_face == "")
    {
        alert("Morate popuniti sva polja.");
        return;
    }

    Email.send({
        SecureToken : "cfa3c2cc-cf28-40ae-805c-27ce428832db",
        To : 'mstscsgo@gmail.com',
        From : "mstscsgo@gmail.com",
        Subject : "Registracija tima",
        Body : message
    }).then(
        function(message) {
            if(message == "OK")
            {
                alert("Uspjesno ste se registrovali.");
                location.href = 'registracija.html';
            }
            else
            {
                alert("Nesto nije uredu sa serverima, pokusajte ponovo kasnije.")
            }
        }
    );
}