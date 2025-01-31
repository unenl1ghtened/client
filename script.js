(function () {
  // Переключаем класс 'open' на иконке бургера и на body
  document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", function (e) {
      const burgerIcon = e.target.closest(".burger-icon");
      const burgerNavLink = e.target.closest(".header__nav-link");

      if (!burgerIcon && !burgerNavLink) return;
      if (document.documentElement.clientWidth > 768) return;

      if (burgerIcon) {
        e.preventDefault();
        document.body.classList.toggle("body--opened-menu");
      }

      if (burgerNavLink) {
        document.body.classList.remove("body--opened-menu");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    function openModal() {
      document.getElementById("modalOverlay").classList.add("show-modal");
    }

    function closeModal() {
      document.getElementById("modalOverlay").classList.remove("show-modal");
    }

    window.openModal = openModal;
    window.closeModal = closeModal;
  });
})();
