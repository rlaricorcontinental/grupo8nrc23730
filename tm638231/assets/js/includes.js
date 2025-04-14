document.addEventListener("DOMContentLoaded", function () {
    const includeHTML = (selector, file) => {
      fetch(file)
        .then(response => response.text())
        .then(data => {
          document.querySelector(selector).innerHTML = data;
        })
        .catch(err => {
          console.error(`Error cargando ${file}:`, err);
        });
    };
  
    includeHTML("header", "includes/header.html");
    includeHTML("footer", "includes/footer.html");
  });
  