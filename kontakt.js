class Kontakt {
  subject = "";
  mail = "";
  poruka = "";
  api_url = "https://63fb163b7a045e192b627b0a.mockapi.io";

  create() {
    let data = {
      subject: this.subject,
      mail: this.mail,
      poruka: this.poruka,
    };
    data = JSON.stringify(data);
    fetch(this.api_url + "/Kontakt", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {});
  }
}

document.querySelector(".forma").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log();
  if (
    document.getElementById("subject").value != "" &&
    document.getElementById("poruka").value != "" &&
    document.getElementById("mail").value != ""
  ) {
    let kontakt = new Kontakt();
    kontakt.subject = document.getElementById("subject").value;
    kontakt.mail = document.getElementById("mail").value;
    kontakt.poruka = document.getElementById("poruka").value;
    kontakt.create();
    alert("vaša poruka je poslana");
    document.getElementById("poruka").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("subject").value = "";
  } else alert("Popunite sva polja");
});
