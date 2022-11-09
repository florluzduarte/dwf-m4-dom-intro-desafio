const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listEl = document.querySelector(".lista");

  const liElsOriginals = listEl.querySelectorAll("li");
  liElsOriginals.forEach((element) => {
    element.remove();
  });

  cosasQueAprendimos.forEach((element) => {
    const newLiEl = document.createElement("li");
    newLiEl.textContent = element.tema;
    newLiEl.classList.add(element.class || "new");
    listEl.appendChild(newLiEl);
  });
}

main();
