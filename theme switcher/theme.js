const themeOptions = ["dark", "light", "hawaii", "forest"];

function applyTheme(themeName) {
  if (!themeOptions.includes(themeName)) {
    return;
  }

  document.body.dataset.theme = themeName;

  const select = document.getElementById("theme-select");
  if (select) {
    select.value = themeName;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("theme-select");
  const savedTheme = localStorage.getItem("theme") || "hawaii";

  if (select) {
    select.value = savedTheme;
    select.addEventListener("change", (event) => {
      const chosenTheme = event.target.value;
      applyTheme(chosenTheme);
      localStorage.setItem("theme", chosenTheme);
    });
  }

  applyTheme(savedTheme);
});
