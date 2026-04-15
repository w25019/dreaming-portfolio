const menuToggle = document.getElementById("menu-toggle");

detailButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const card = event.target.closest(".product-card");
    const name = card.dataset.name;
    const price = card.dataset.price;
    const desc = card.dataset.desc;

    modalName.textContent = name;
    modalPrice.textContent = price;
    modalDesc.textContent = desc;
    modal.classList.remove("hidden");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});