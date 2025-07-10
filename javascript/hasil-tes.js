document.addEventListener("DOMContentLoaded", function () {
  const hasilTesSection = document.getElementById("hasiltes");

  const tabButtons = document.querySelectorAll(".hasil-tes-tabs .tab-button");
  const hasilTesContents = document.querySelectorAll(".hasil-tes-content");

  const originalTableRows = {};

  function initializeTableFilters(contentElement) {
    const searchInput = contentElement.querySelector(".searchInput");
    const searchButton = contentElement.querySelector(".searchButton");
    const statusFilter = contentElement.querySelector(".statusFilter");
    const hasilTesTableBody = contentElement.querySelector(
      ".hasilTesTable tbody"
    );
    const noResultsMessage = contentElement.querySelector(".noResultsMessage");

    if (
      !searchInput ||
      !searchButton ||
      !statusFilter ||
      !hasilTesTableBody ||
      !noResultsMessage
    ) {
      console.warn(
        `Elemen filter/search tidak lengkap di tab: ${contentElement.id}. Membatalkan inisialisasi filter.`
      );
      return;
    }

    if (!originalTableRows[contentElement.id]) {
      originalTableRows[contentElement.id] = Array.from(
        hasilTesTableBody.querySelectorAll("tr")
      );
      console.log(
        `Data asli untuk ${contentElement.id} disimpan. Jumlah baris: ${
          originalTableRows[contentElement.id].length
        }`
      );
    }

    const currentTableRows = originalTableRows[contentElement.id];

    function applyTableFilters() {
      const searchText = searchInput.value.toLowerCase().trim();
      const filterStatus = statusFilter.value;
      let resultsFound = false;

      currentTableRows.forEach((row) => {
        const rowCells = row.querySelectorAll("td");
        const namaPeserta = rowCells[1]
          ? rowCells[1].textContent.toLowerCase()
          : "";
        const status = rowCells[5] ? rowCells[5].textContent : "";

        const matchesSearch = namaPeserta.includes(searchText);
        const matchesFilter = filterStatus === "all" || status === filterStatus;

        if (matchesSearch && matchesFilter) {
          row.classList.remove("hidden");
          resultsFound = true;
        } else {
          row.classList.add("hidden");
        }
      });

      if (resultsFound) {
        noResultsMessage.classList.add("hidden");
      } else {
        noResultsMessage.classList.remove("hidden");
      }
      console.log(
        `Filter diterapkan pada ${contentElement.id}. Hasil ditemukan: ${resultsFound}`
      );
    }

    searchInput.removeEventListener("keyup", searchInput.__keyupHandler__);
    searchButton.removeEventListener("click", searchButton.__clickHandler__);
    statusFilter.removeEventListener("change", statusFilter.__changeHandler__);

    searchInput.__keyupHandler__ = function (event) {
      if (event.key === "Enter") {
        applyTableFilters();
      }
      // else { applyTableFilters(); } // Uncomment ini untuk real-time search saat mengetik
    };
    searchButton.__clickHandler__ = applyTableFilters;
    statusFilter.__changeHandler__ = applyTableFilters;

    searchInput.addEventListener("keyup", searchInput.__keyupHandler__);
    searchButton.addEventListener("click", searchButton.__clickHandler__);
    statusFilter.addEventListener("change", statusFilter.__changeHandler__);

    applyTableFilters();
  }

  function showHasilTesContent(targetId) {
    console.log(`Mengaktifkan tab: ${targetId}`);
    hasilTesContents.forEach((content) => {
      content.classList.add("hidden");
      content.classList.remove("active");
    });

    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.remove("hidden");
      targetContent.classList.add("active");

      initializeTableFilters(targetContent);

      if (hasilTesSection) {
        window.scrollTo({
          top: hasilTesSection.offsetTop,
          behavior: "smooth",
        });
      }
    } else {
      console.error(`Konten hasil tes dengan ID ${targetId} tidak ditemukan.`);
    }
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      tabButtons.forEach((btn) => btn.classList.remove("active"));

      this.classList.add("active");

      const targetId = this.getAttribute("data-target");
      showHasilTesContent(targetId);
    });
  });

  const defaultTab = document.querySelector(
    '.hasil-tes-tabs .tab-button[data-target="sd-results"]'
  );
  if (defaultTab) {
    defaultTab.click();
  } else {
    console.warn(
      "Tombol tab default 'sd-results' tidak ditemukan. Mencoba menampilkan konten SD secara langsung."
    );
    showHasilTesContent("sd-results");
    document.getElementById("sd-results")?.classList.add("active");
  }
});
