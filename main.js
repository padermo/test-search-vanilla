document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("searchForm");
  const search = document.getElementById("searchbar");

  let parameter = "";

  search.addEventListener("input", (e) => { parameter = e.target.value.toLowerCase() });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!parameter) return;

    window.location.href = `/buscador.html?q=${encodeURIComponent(parameter)}`;
  });

});
