// Kita Buat Function buat sembunyiin section news terlebih dahulu
function showNews(id) {
  const allNewsDetails = document.querySelectorAll(".news-detail-section");
  allNewsDetails.forEach((section) => {
    section.style.display = "none";
  });

  // tampilin section news yg diminta
  const newsSection = document.getElementById(id);
  if (newsSection) {
    newsSection.style.display = "block";
    newsSection.scrollIntoView({ behavior: "smooth" });
  }

  // sembunyiin daftar news" utama
  const newsListing = document.getElementById("news");
  if (newsListing) {
    newsListing.style.display = "none";
  }
}

function showNewsListing() {
  // Sembunyikan semua section detail news
  const allNewsDetails = document.querySelectorAll(".news-detail-section");
  allNewsDetails.forEach((section) => {
    section.style.display = "none";
  });

  // tampilin lgi daftar news utama
  const newsListing = document.getElementById("news");
  if (newsListing) {
    newsListing.style.display = "block";
    newsListing.scrollIntoView({ behavior: "smooth" });
  }
}

// pastiin hanya tamppilin daftar news pd saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  showNewsListing(); // panggil function yg bener buat nampilin daftar news utama
});

// kita buat logika utama pada saat halaman news.html ini dipanggil dari halaman akademik,sd,smp,sma
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const newsId = urlParams.get("newsId"); // Ambil nilai parameter 'newsId' dari URL

  if (newsId) {
    // Jika ada newsId di URL, panggil showNews() untuk menampilkan berita spesifik tersebut
    showNews(newsId);
  } else {
    // Jika tidak ada newsId di URL (misalnya user langsung akses news.html tanpa parameter),
    // tampilkan daftar berita utama
    showNewsListing();
  }
});
