document.addEventListener("DOMContentLoaded", function () {
  const btnReguler = document.getElementById("btn-reguler");
  const btnPindahan = document.getElementById("btn-pindahan");
  const formSelectionCards = document.getElementById("form-selection-cards");
  const formReguler = document.getElementById("form-reguler");
  const formPindahan = document.getElementById("form-pindahan");
  const initialHeader = document.getElementById("initial-header");
  const backToSelectionReguler = document.getElementById(
    "back-to-selection-reguler"
  );
  const backToSelectionPindahan = document.getElementById(
    "back-to-selection-pindahan"
  );

  function showSelectionCards() {
    formSelectionCards.classList.remove("hidden");
    initialHeader.classList.remove("hidden");
    formReguler.classList.add("hidden");
    formPindahan.classList.add("hidden");

    window.scrollTo({
      top: document.getElementById("form-daftar").offsetTop,
      behavior: "smooth",
    });
  }

  function hideSelectionCardsAndHeader() {
    formSelectionCards.classList.add("hidden");
    initialHeader.classList.add("hidden");
  }

  if (btnReguler) {
    btnReguler.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Tombol Reguler diklik");
      hideSelectionCardsAndHeader();
      formReguler.classList.remove("hidden");
      formPindahan.classList.add("hidden");

      window.scrollTo({
        top: formReguler.offsetTop,
        behavior: "smooth",
      });
    });
  } else {
    console.error("Elemen #btn-reguler tidak ditemukan!");
  }

  if (btnPindahan) {
    btnPindahan.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Tombol Pindahan diklik");
      hideSelectionCardsAndHeader();
      formPindahan.classList.remove("hidden");
      formReguler.classList.add("hidden");

      window.scrollTo({
        top: formPindahan.offsetTop,
        behavior: "smooth",
      });
    });
  } else {
    console.error("Elemen #btn-pindahan tidak ditemukan!");
  }

  if (backToSelectionReguler) {
    backToSelectionReguler.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Kembali dari Reguler diklik");
      showSelectionCards();
    });
  } else {
    console.error("Elemen #back-to-selection-reguler tidak ditemukan!");
  }

  if (backToSelectionPindahan) {
    backToSelectionPindahan.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Kembali dari Pindahan diklik");
      showSelectionCards();
    });
  } else {
    console.error("Elemen #back-to-selection-pindahan tidak ditemukan!");
  }

  showSelectionCards();
});
