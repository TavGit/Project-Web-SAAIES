document.addEventListener("DOMContentLoaded", function () {
  // Logika Swiper Javascript
  const swiper = new Swiper(".banner-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});

// Kita buat Logika buat halaman di smp ini bisa menampilkan news secara teratur lewat tombol back dan next
const newsItems = [
  {
    id: "news-1",
    title: "Kegiatan PPDB Gelombang Ke - 1",
    description: "Pelaksanaan kegiatan tes ppdb gelombang pertama",
    image: "/image/news-image/news-1/news-1-kegiatan-ppdb.jpg",
  },
  {
    id: "news-2",
    title: "Tes Penerimaan & Microteaching Guru Baru",
    description:
      "Informasi tentang tes penerimaan dan microteaching guru baru.",
    image: "/image/news-image/news-2/news-2.jpg",
  },
  {
    id: "news-3",
    title: "Rapat Kerja Tahun Ajaran 2025/2026",
    description: "Detail mengenai rapat kerja tahun ajaran baru.",
    image: "/image/news-image/news-3/news-3.jpg",
  },
];

let currentNewsIndex = 0;

const hoverFotoTitle = document.getElementById("hover-foto-title");
const hoverFotoDesc = document.getElementById("hover-foto-description");
const hoverFotoImage = document.getElementById("hover-foto-main-image");
const hoverFotoDetailsLink = document.getElementById("hover-foto-details-link");
const hoverFotoPrevBtn = document.getElementById("hover-foto-prev");
const hoverFotoNextBtn = document.getElementById("hover-foto-next");

// kita buat function untuk memperbarui news yg akan tampil
function updateHoverFotoContent() {
  const news = newsItems[currentNewsIndex];
  if (news) {
    const words = news.title.split(" ");
    let firstLine = "";
    let secondLine = "";

    if (words.length > 2) {
      firstLine = words.slice(0, 2).join(" ");
      secondLine = words.slice(2).join(" ");
      hoverFotoTitle.innerHTML = `${firstLine}<br>${secondLine}`;
    } else {
      hoverFotoTitle.textContent = news.title;
    }

    hoverFotoDesc.textContent = news.description;
    hoverFotoImage.src = news.image;
    hoverFotoImage.alt = news.title;
    // Link ke halaman news.html dengan parameter ID news
    hoverFotoDetailsLink.href = `/html/Tentang-Kami/news.html?newsId=${news.id}`;
  }
}

// Handler untuk tombol "Previous"
if (hoverFotoPrevBtn) {
  hoverFotoPrevBtn.addEventListener("click", () => {
    currentNewsIndex =
      (currentNewsIndex - 1 + newsItems.length) % newsItems.length;
    updateHoverFotoContent();
  });
}

// Handler untuk tombol "Next"
if (hoverFotoNextBtn) {
  hoverFotoNextBtn.addEventListener("click", () => {
    currentNewsIndex = (currentNewsIndex + 1) % newsItems.length;
    updateHoverFotoContent();
  });
}

// Inisialisasi konten saat halaman smp dimuat
document.addEventListener("DOMContentLoaded", () => {
  updateHoverFotoContent();
});
