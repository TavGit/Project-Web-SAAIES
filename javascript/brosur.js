document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const brosurContents = document.querySelectorAll(".brosur-content");
  const brosurSection = document.getElementById("brosur");

  // Lightbox Modal
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeButton = document.querySelector(".close-button");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  let currentImageIndex = 0;
  let allBrosurImages = [];

  // buat function untuk menampilkan brosur yg dipilih
  function showBrosurContent(targetId) {
    // Sembunyikan semua brosur
    brosurContents.forEach((content) => {
      content.classList.add("hidden");
      content.classList.remove("active");
    });

    // tampilkan brosur yg sesuai dengan id
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.remove("hidden");
      targetContent.classList.add("active");

      allBrosurImages = [];
      document.querySelectorAll(".brosur-thumbnail").forEach((img) => {
        allBrosurImages.push(img.getAttribute("data-full-src"));
      });

      if (brosurSection) {
        window.scrollTo({
          top: brosurSection.offsetTop,
          behavior: "smooth",
        });
      }
    } else {
      console.error(`Konten brosur dengan ID ${targetId} tidak ditemukan.`);
    }
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      tabButtons.forEach((btn) => btn.classList.remove("active"));

      this.classList.add("active");

      // Ambil ID target dari atribut data-target
      const targetId = this.getAttribute("data-target");
      showBrosurContent(targetId);
    });
  });

  // Inisialisasi: Tampilkan brosur SD secara default saat halaman pertama kali dibuka
  const defaultTab = document.querySelector(
    '.tab-button[data-target="sd-brosur"]'
  );
  if (defaultTab) {
    defaultTab.click();
  } else {
    showBrosurContent("sd-brosur");
    document.getElementById("sd-brosur")?.classList.add("active");
  }

  // ==================================
  // Lightbox Function
  // ==================================

  // Event listener untuk setiap gambar brosur thumbnail

  document.querySelectorAll(".brosur-thumbnail").forEach((img, index) => {
    img.addEventListener("click", function () {
      const fullSrc = this.getAttribute("data-full-src");
      lightboxImage.src = fullSrc;
      lightboxModal.classList.remove("hidden");
      currentImageIndex = allBrosurImages.indexOf(fullSrc);
      console.log("Gambar diklik:", fullSrc, "Index:", currentImageIndex);
    });
  });

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      lightboxModal.classList.add("hidden");
    });
  }

  if (lightboxModal) {
    lightboxModal.addEventListener("click", function (e) {
      if (e.target === lightboxModal) {
        lightboxModal.classList.add("hidden");
      }
    });
  }

  // buat function untuk menampilkan gambar brosur sebelum/sesudah nya
  function showNextImage() {
    if (allBrosurImages.length === 0) return;

    currentImageIndex = (currentImageIndex + 1) % allBrosurImages.length;
    lightboxImage.src = allBrosurImages[currentImageIndex];
    console.log("Next image index:", currentImageIndex);
  }

  function showPrevImage() {
    if (allBrosurImages.length === 0) return;

    currentImageIndex =
      (currentImageIndex - 1 + allBrosurImages.length) % allBrosurImages.length;
    lightboxImage.src = allBrosurImages[currentImageIndex];
    console.log("Prev image index:", currentImageIndex);
  }

  // Event listener untuk tombol next dan prev
  if (nextButton) {
    nextButton.addEventListener("click", showNextImage);
  }
  if (prevButton) {
    prevButton.addEventListener("click", showPrevImage);
  }

  // Event listener untuk keyboard
  document.addEventListener("keydown", function (e) {
    if (!lightboxModal.classList.contains("hidden")) {
      if (e.key === "ArrowRight") {
        showNextImage();
      } else if (e.key === "ArrowLeft") {
        showPrevImage();
      } else if (e.key === "Escape") {
        lightboxModal.classList.add("hidden");
      }
    }
  });
});
