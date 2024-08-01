// Sélectionne tous les éléments avec la classe "accordion"
document.querySelectorAll(".accordion").forEach(button => {
    button.addEventListener("click", function() {
      // Basculer la classe "active" sur le bouton cliqué
      this.classList.toggle("active");
  
      // Basculer l'affichage du panneau associé
      const panel = this.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });
  
  