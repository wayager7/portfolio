// document.querySelectorAll('.planete').forEach((planete) => {
//     planete.addEventListener('click', (event) => {
//         const contenu = event.target.querySelector('.contenu');
//         if (contenu) {
//             contenu.style.display = 'block';
//         }
//     });
// });

const planete = document.querySelector('.planete');
// Obtenez les styles calculés pour l'élément '.planete'
const computedStyles = window.getComputedStyle(planete);
// Récupérez la valeur de la largeur et stockez-la dans une constante
const initialWidth = computedStyles.width;
console.log("initialWidth : " + initialWidth);

// document.querySelectorAll('.planete').forEach((planete) => {
//     planete.addEventListener('click', () => {
//         document.querySelectorAll('.planete .contenu').forEach((contenu) => {
//             if (contenu.style.opacity === '0') {
//                 contenu.style.opacity = '100';
//                 console.log("affiche contenu");
//                 planete.style.width = '100vw';
//                 planete.style.height = '100vh';
//                 planete.style.borderRadius = '0';
//             } else {
//                 contenu.style.opacity = '0';
//                 console.log("cache contenu");
//                 planete.style.width = initialWidth;
//                 planete.style.height = initialWidth;
//                 planete.style.borderRadius = '100%';
//             }
//         });
//     });
// });


document.querySelectorAll('.planete').forEach((planete) => {
    planete.addEventListener('click', () => {
        document.querySelectorAll('.planete').forEach((allPlanete) => {
            const contenu = allPlanete.querySelector('.contenu');
            if (contenu.style.opacity === '0') {
                contenu.style.opacity = '100';
                allPlanete.style.width = '100vw';
                allPlanete.style.height = '100vh';
                allPlanete.style.borderRadius = '0';
                allPlanete.style.background = 'linear-gradient(1deg, #' + allPlanete.id + ' 0%, rgba(67, 66, 80, 0) 94%)';
                console.log("affiche contenu");
            } else {
                contenu.style.opacity = '0';
                allPlanete.style.width = initialWidth;
                allPlanete.style.height = initialWidth;
                allPlanete.style.borderRadius = '100%';
                allPlanete.style.background = 'radial-gradient(70.68% 70.68% at 26.19% 40.30%, #' + allPlanete.id + ' 0%, rgb(0, 0, 0) 94%)';
                console.log("cache contenu");
            }
            console.log("#" + allPlanete.id);
        });
    });
});
// const container = document.querySelector('.planetes'); // Remplacez '.planete-container' par le sélecteur de votre conteneur de défilement

// container.addEventListener('scroll', () => {
//   if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
//     container.scrollLeft = 0;
//   }
// });

