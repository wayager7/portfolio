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

