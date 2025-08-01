document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const humburgerIcon = document.getElementById("humburger-icon");
  const closeIcon = document.getElementById("close-icon");
  const menuToggle = document.querySelector(".menu-toggle");

  // Toggle mobile menu
  function toggleMobileMenu() {
    navbar.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
    humburgerIcon.style.display = navbar.classList.contains("active")
      ? "none"
      : "block";
    closeIcon.style.display = navbar.classList.contains("active")
      ? "block"
      : "none";
  }

  menuToggle.addEventListener("click", toggleMobileMenu);

  // Handle dropdown toggle (khusus untuk mobile)
  const topLevelLinks = document.querySelectorAll(".navbar ul > li > a");

  topLevelLinks.forEach((link) => {
    const dropdown = link.nextElementSibling;

    if (dropdown && dropdown.classList.contains("dropdown")) {
      link.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();

          document.querySelectorAll(".dropdown.show").forEach((d) => {
            if (d !== dropdown) d.classList.remove("show");
          });

          document
            .querySelectorAll(".navbar ul > li > a i.bi")
            .forEach((icon) => {
              if (icon.closest("li").querySelector(".dropdown") !== dropdown) {
                icon.classList.remove("bi-caret-up-fill");
                icon.classList.add("bi-caret-down-fill");
              }
            });

          dropdown.classList.toggle("show");
          const icon = this.querySelector("i.bi");
          if (icon) {
            icon.classList.toggle(
              "bi-caret-up-fill",
              dropdown.classList.contains("show")
            );
            icon.classList.toggle(
              "bi-caret-down-fill",
              !dropdown.classList.contains("show")
            );
          }
        }
      });
    }
  });

  // Klik link biasa menutup menu
  navbar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        const isDropdownParent =
          link.parentElement && link.parentElement.querySelector(".dropdown");
        const isDropdownItem = link.closest(".dropdown");

        if (!isDropdownParent || isDropdownItem) {
          toggleMobileMenu();
          document
            .querySelectorAll(".dropdown.show")
            .forEach((d) => d.classList.remove("show"));
          document.querySelectorAll(".navbar ul li a i.bi").forEach((icon) => {
            icon.classList.remove("bi-caret-up-fill");
            icon.classList.add("bi-caret-down-fill");
          });
        }
      }
    });
  });

  // Reset jika resize ke desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navbar.classList.remove("active");
      document.body.classList.remove("no-scroll");
      humburgerIcon.style.display = "block";
      closeIcon.style.display = "none";

      // Reset dropdowns (transisi dari mobile ke desktop)
      document
        .querySelectorAll(".dropdown.show")
        .forEach((d) => d.classList.remove("show"));
      document.querySelectorAll(".navbar ul li a i.bi").forEach((icon) => {
        icon.classList.remove("bi-caret-up-fill");
        icon.classList.add("bi-caret-down-fill");
      });
    }
  });
});

// Buat Logika buat animasi typing text
// buat lah variable array
const text = [
  "Shallahuddin Al - Ayyubi Islamic Elementary School",
  "Sekolah Islam Terpadu Unggulan diBekasi",
  "Sekolah Dasar Islam Terpadu SAAIES Bekasi",
  "Sekolah Menengah Pertama Islam Terpadu SAAIES Bekasi",
  "Sekolah Menengah Atas Islam Terpadu SAAIES Bekasi",
];

// buat variable yg mengambil element span, berdasarkan id
const typingSpan = document.getElementById("typing-text");

// buat variable yg dimulai dari angka 0 berdasarkan index
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

// buat function utama yg fungsi ny untuk mengatur mengetik dan menghapus
function type() {
  // buat variable yg mengambil variable array, dan isi ny variable yg value ny dimulai dari angka/index 0
  const currentText = text[textIndex];

  // buat pengkondisian if
  if (!isDeleting) {
    // jika sedang proses mengetik, tampilkan karakter dari awal sampe akhir
    // 0 + 1 seterus ny sampai karakter habis
    typingSpan.textContent = currentText.slice(0, charIndex + 1);
    // increment, menambah satu angka
    charIndex++;
    // setelah selesai mengetik, maka lanjut menghapus karakter
    if (charIndex === currentText.length) {
      // maka variable isDeleting bernilai true/benar jika sudah saat ny menghapus karakter
      isDeleting = true;
      // sebelum menghapus berikan jeda 800 mili second/per detik
      setTimeout(type, 800);
      return; // kembalikan, agar tidak terlalu kecepatan saat mengetik atau menghapus
    }
  } else {
    // jika sedang menghapus maka kurangi karakter dari dikurang 1
    typingSpan.textContent = currentText.slice(0, charIndex - 1);
    charIndex--; // menggunakan decrement

    // jika sudah habis karakter ny dihapus, maka mulai dari awal lagi mengetik nya
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % text.length;
      setTimeout(type, 400); // kasih jeda sebelum mulai mengetik karakter baru lgi
      return;
    }
  }
  setTimeout(type, isDeleting ? 40 : 80);
  // mengatur kecepatan, 40 mili second/per detik jika sedang menghapus
  // mengatur kecepatan, 80 mili second/per detik jika sedang mengetik
}

type(); // memulai animasi typing saat halaman dibuka

// Logika Swiper Javascript untuk halaman home index.html
const swiper = new Swiper(".fasilitas-swiper", {
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
