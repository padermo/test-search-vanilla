let data = []

const fetchData = async () => {
  const result = await fetch("/data/data.json");
  data = await result.json();
};

document.addEventListener("DOMContentLoaded", async () => {
  const box = document.getElementById("result")
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q")?.toLowerCase() || "";

  await fetchData();

  const results = data.filter(item =>
    item.criterio.toLowerCase().includes(query)
  );

  results.map((value) => {
    box.innerHTML = `<h1>${value.title}</h1>`
  })
});
