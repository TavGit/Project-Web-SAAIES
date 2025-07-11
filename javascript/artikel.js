// Kita Buat Function buat sembunyiin section artikel terlebih dahulu
function showArtikel(id) {
  const allArtikelDetails = document.querySelectorAll(
    ".artikel-detail-section"
  );
  allArtikelDetails.forEach((section) => {
    section.style.display = "none";
  });

  // tampilin section artikel yg diminta
  const artikelSection = document.getElementById(id);
  if (artikelSection) {
    artikelSection.style.display = "block";
    artikelSection.scrollIntoView({ behavior: "smooth" });
  }

  // sembunyiin daftar artikel" utama
  const artikelListing = document.getElementById("artikel");
  if (artikelListing) {
    artikelListing.style.display = "none";
  }
}

function showArtikelListing() {
  // Sembunyikan semua section detail artikel
  const allArtikelDetails = document.querySelectorAll(
    ".artikel-detail-section"
  );
  allArtikelDetails.forEach((section) => {
    section.style.display = "none";
  });

  // tampilin lgi daftar artikel utama
  const artikelListing = document.getElementById("artikel");
  if (artikelListing) {
    artikelListing.style.display = "block";
    artikelListing.scrollIntoView({ behavior: "smooth" });
  }
}

// pastiin hanya tamppilin daftar artikel pd saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  showArtikelListing(); // panggil function yg bener buat nampilin daftar artikel utama
});

// kita buat logika utama pada saat halaman artikel.html ini dipanggil
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const artikelId = urlParams.get("artikelId"); // Ambil nilai parameter 'artikelId' dari URL

  if (artikelId) {
    // Jika ada artikelId di URL, panggil showArtikel() untuk menampilkan artikel spesifik tersebut
    showNews(artikelId);
  } else {
    // Jika tidak ada artikelId di URL (misalnya user langsung akses artikel.html tanpa parameter),
    // tampilkan daftar artikel utama
    showArtikelListing();
  }
});
