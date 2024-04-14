console.log("ici ça fonctionne encore");


window.addEventListener('load', function() {
    var downs = document.querySelectorAll('.down');
    downs.forEach(function(down) {
      down.addEventListener('click', function(event) {
        event.preventDefault();
        var main = document.querySelector('.main');
        main.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });

  window.addEventListener('load', function() {
    var right = document.querySelector('.right');
    right.addEventListener('click', function(event) {
        event.preventDefault();
        var infom = document.querySelector('.infom');
        infom.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

window.addEventListener('load', function() {
    var logo = document.querySelector('.logo');
    logo.addEventListener('click', function(event) {
      event.preventDefault();
      var didi = document.querySelector('.didi');
      didi.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
});


//naviguer avec les fleches du clavier
window.addEventListener('load', function() {
  var logo = document.querySelector('.logo');
  logo.addEventListener('click', function(event) {
    event.preventDefault();
    var didi = document.querySelector('.didi');
    didi.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });

  // Écoutez l'événement keydown sur l'objet window
  window.addEventListener('keydown', function(event) {
    // Vérifiez si la touche pressée est la flèche vers le haut ou vers le bas
    if (event.key === 'ArrowUp') {
      // Si c'est la flèche vers le haut, faites défiler vers le haut
      window.scrollBy({
        top: -100,  // Modifiez cette valeur pour ajuster la distance de défilement
        behavior: 'smooth'
      });
    } else if (event.key === 'ArrowDown') {
      // Si c'est la flèche vers le bas, faites défiler vers le bas
      window.scrollBy({
        top: 100,  // Modifiez cette valeur pour ajuster la distance de défilement
        behavior: 'smooth'
      });
    }
  });
});