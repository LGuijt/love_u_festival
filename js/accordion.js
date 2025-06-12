function accordionBuilder() {
    document.querySelectorAll(".accordion").forEach(acc => {
        acc.addEventListener("click", function () {
          this.classList.toggle("active");
          const panel = this.nextElementSibling;
          panel.classList.toggle("open");
        });
      });
}