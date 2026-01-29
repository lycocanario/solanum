// Script untuk dropdown menu
document.addEventListener("DOMContentLoaded", function() {
  const dropdown = document.querySelector(".dropdown > a");
  const menu = document.querySelector(".dropdown-menu");

  dropdown.addEventListener("click", function(e) {
    e.preventDefault();
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });
});

// Script untuk tombol "Load More"
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".story-card");
  const loadMoreBtn = document.getElementById("loadMore");
  let visibleCount = 5;

  loadMoreBtn.addEventListener("click", function() {
    visibleCount += 5; // tampilkan 5 lagi
    cards.forEach((card, index) => {
      if (index < visibleCount) {
        card.style.display = "block";
      }
    });
    if (visibleCount >= cards.length) {
      loadMoreBtn.style.display = "none"; // sembunyikan tombol kalau semua sudah tampil
    }
  });
});
