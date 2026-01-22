let data = []

const fetchData = async () => {
  const result = await fetch("/data.json");
  data = await result.json();
};

document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q");

  await fetchData();

  const results = data.filter(item =>
    item.criterio.toLowerCase().includes(query)
  );

  console.log(results)
});
