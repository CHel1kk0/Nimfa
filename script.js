(function () {
  var root = document.querySelector("[data-accordion]");
  if (root) {
    var items = root.querySelectorAll(".faq-item");

    function setIcon(item, open) {
      var icon = item.querySelector(".faq-icon");
      if (icon) icon.textContent = open ? "−" : "+";
    }

    items.forEach(function (item) {
      var btn = item.querySelector(".faq-q");
      var panel = item.querySelector(".faq-a");
      if (!btn || !panel) return;

      setIcon(item, false);
      btn.setAttribute("aria-expanded", "false");
      panel.hidden = true;

      btn.addEventListener("click", function () {
        var willOpen = !item.classList.contains("is-open");

        items.forEach(function (other) {
          other.classList.remove("is-open");
          var ob = other.querySelector(".faq-q");
          var op = other.querySelector(".faq-a");
          if (ob) ob.setAttribute("aria-expanded", "false");
          if (op) op.hidden = true;
          setIcon(other, false);
        });

        if (willOpen) {
          item.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
          panel.hidden = false;
          setIcon(item, true);
        }
      });
    });
  }

  var modal = document.getElementById("catalog-modal");
  var openBtn = document.querySelector("[data-open-catalog]");
  var closeBtns = document.querySelectorAll("[data-close-catalog]");

  if (!modal || !openBtn) return;

  function setModalState(open) {
    modal.classList.toggle("is-open", open);
    modal.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.classList.toggle("modal-open", open);
  }

  openBtn.addEventListener("click", function () {
    setModalState(true);
  });

  closeBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setModalState(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setModalState(false);
    }
  });
})();
