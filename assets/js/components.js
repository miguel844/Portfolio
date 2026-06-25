document.addEventListener("DOMContentLoaded", async () => {

  await loadNavbar();
  await loadFooter();
  setActiveLink();

});

async function loadNavbar() {
  const header = document.getElementById("navbar-container");
  if (!header) return;

  const res = await fetch("components/navbar.html");
  const html = await res.text();
  header.innerHTML = html;

  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("translate-x-full");
    });
  }
}

async function loadFooter() {
  const footer = document.getElementById("footer-container");
  if (!footer) return;

  const res = await fetch("components/footer.html");
  footer.innerHTML = await res.text();
}


function setActiveLink() {
  const pageMap = {
    "index.html": "home",
    "proyectos.html": "proyectos",
    "contacto.html": "contacto"
  };

  const current = Object.keys(pageMap).find(page =>
    window.location.pathname.includes(page)
  );

  document.querySelectorAll("#menu a").forEach(link => {
    if (link.dataset.page === pageMap[current]) {
      link.classList.add("active-page");
    }
  });
}
