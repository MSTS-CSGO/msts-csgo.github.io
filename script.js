const form = document.getElementById("js_form");
var count = 1;

function addNew() {
    const _new = document.createElement("div");
    for (let i = 0; i < 3; i++) _new.appendChild(form[i].cloneNode());
    for (let i = 0; i < 3; i++) _new.children[i].value = "";
    form.appendChild(_new);
    count++;
}

function shouldAdd(add = true) {
    for (let i = 0; i < form.length; i++) {
        if (form[i].value == "") return 1;
    }
    if (count == 5) return 0;
    if (add) addNew();
    return 0;
}

function isValidHttpUrl(string) {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

function submit() {
    console.log(count);
    if (shouldAdd(false) == 1 || count != 5) return;

    let ekipa = "UNIMPLEMENTED";
    let mail = "UNIMPLEMENTED";

    for (let i = 0; i < form.length; i += 3) {
        if (!isValidHttpUrl(form[i + 1].value)) {
            alert("Link mora biti u punom http ili https formatu.");
            return;
        }
    }

    let message = "Ime ekipe: " + ekipa + "<BR>Kontakt mail: " + mail + "<BR>Igraci (leader je prvi igrac):";
    for (let i = 0; i < form.length; i += 3) {
        message += "<BR>" + (i / 3 + 1) + ". " + form[i].value + " " + form[i + 2].value + "; Faceit link: " + form[i + 1].value;
    }

    Email.send({
        SecureToken: "cfa3c2cc-cf28-40ae-805c-27ce428832db",
        To: 'mstscsgo@gmail.com',
        From: "mstscsgo@gmail.com",
        Subject: "Registracija tima",
        Body: message
    }).then(
        function (message) {
            if (message == "OK") {
                alert("Uspjesno ste se registrovali.");
                // location.href = 'registracija.html';
            }
            else {
                alert("Nesto nije uredu sa serverima, pokusajte ponovo kasnije.")
            }
        }
    );
}
