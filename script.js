window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";

  const hour = new Date().getHours();
  document.body.style.background = hour >= 6 && hour <= 18 ?
    "linear-gradient(to bottom, #87CEEB, #ffffff)" :
    "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)";

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
    card.setAttribute("data-aos", "fade-up");
    card.innerHTML = `
      <h3>${loc.city}</h3>
      <img src="https://source.unsplash.com/400x300/?${encodeURIComponent(loc.tag)}" alt="${loc.city}">
    `;
    grid.appendChild(card);
  });
});