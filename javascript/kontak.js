// kita buat function whatsapp, buat langsung kirim dari form kontak ke no whatsapp

function whatsapp() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var whatsappurl =
    "https://wa.me/628882882024?text=" +
    "Nama Lengkap: " +
    name +
    "%0a" +
    "Email: " +
    email +
    "%0a" +
    "Nomor Telepon: " +
    phone +
    "%0a" +
    "Subjek: " +
    subject +
    "%0a" +
    "Pesan Anda: " +
    message +
    "%0a";

  window.open(whatsappurl, "_blank").focus;
}
