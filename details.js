

const planete = document.querySelector('.planete');
// Obtenez les styles calculés pour l'élément '.planete'
const computedStyles = window.getComputedStyle(planete);
// Récupérez la valeur de la largeur et stockez-la dans une constante
const initialWidth = computedStyles.width;
console.log("initialWidth : " + initialWidth);

const codeDiv = document.querySelector('.code');
const sonsDiv = document.querySelector('.sons');
const graphDiv = document.querySelector('.graph');
const designDiv = document.querySelector('.design');
const videoDiv = document.querySelector('.video');
const threeDiv = document.querySelector('.three');
// const div = document.createElement('div');


// fetch('data.json')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         data[0].div1.forEach(element => {
//             let contenu = "";
//             contenu += `<div class='creation' id=${element.name}><h2>${element.name}</h2><p>${element.description}</p>`;
//             if (element.membres.length > 0) {
//                 element.membres.forEach(membre => {
//                     contenu += `<a href="${membre.lkdn}">${membre.name}</a>`;
//                 });
//             }
//             contenu += `</div>`;
//             codeDiv.innerHTML += contenu;
//         });
//     })
//     .catch(error => console.error('Erreur attrapée :', error));



document.querySelectorAll('.planete').forEach((planete) => {
    planete.addEventListener('click', () => {
        document.querySelectorAll('.planete').forEach((allPlanete) => {
            const contenu = allPlanete.querySelector('.contenu');
            if (contenu.style.display === 'none') {
                contenu.style.display = 'block';
                allPlanete.style.width = '100vw';
                allPlanete.style.height = '100vh';
                allPlanete.style.borderRadius = '0';
                allPlanete.style.background = 'linear-gradient(1deg, #' + allPlanete.id + ' 0%, rgba(67, 66, 80, 0) 94%)';
                console.log("affiche contenu");
            } else {
                contenu.style.display = 'none';
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

