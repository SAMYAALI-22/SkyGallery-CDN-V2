window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";

  const locations = [
    { city: "Tokyo", tag: "tokyo sky" },
    { city: "New York", tag: "newyork sky" },
    { city: "Sydney", tag: "sydney sky" },
    { city: "Cairo", tag: "cairo sky" },
    { city: "Paris", tag: "paris sky" },
    { city: "Rio", tag: "rio sky" },
  ];

  const grid = document.querySelector(".sky-grid");

  locations.forEach(loc => {
    const card = document.createElement("div");
    card.className = "sky-card";
    card.innerHTML = `
      <h3>${loc.city}</h3>
      <img src="https://source.unsplash.com/400x300/?${encodeURIComponent(loc.tag)}" alt="${loc.city}">
    `;
    grid.appendChild(card);
  });
});