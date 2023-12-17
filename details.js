

const planete = document.querySelector('.planete');
// Obtenez les styles calculés pour l'élément '.planete'
const computedStyles = window.getComputedStyle(planete);
// Récupérez la valeur de la largeur et stockez-la dans une constante
const initialWidth = computedStyles.width;
console.log("initialWidth : " + initialWidth);

// const codeDiv = document.querySelector('#code .flexzone');
// const sonsDiv = document.querySelector('#sons .flexzone');
// const graphDiv = document.querySelector('.graph');
// const designDiv = document.querySelector('.design');
// const videoDiv = document.querySelector('.video');
// const threeDiv = document.querySelector('.three');
// const div = document.createElement('div');

//creer une variable contenue que je vais remplir au fur et a mesure de donnée provenant de mon json pour tout mettre directement dans une balise class "flexzone"
// let x = 0;
let y = 0;
// let z = 0
// while (y < 6) {
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let flexz = document.querySelectorAll('.contenu .flexzone');
        // if(y < 6) return;
        // for(let x = 0; x < data.length; x++){
        // for(let y = 0; y < data.length; y++){
        data.forEach(function(donnee) {
            donnee.div1.forEach((element) => {
                // console.log(x);
                let projectElement = document.createElement('div');
                projectElement.id = element.id;
                projectElement.className = "projet " + element.name;

                let contenu = ""; 
                contenu += `<h2>${element.name}</h2><p>${element.description}</p>`;
                contenu += `<p>${element.outils}</p>`

                // Ajouter un gestionnaire d'événements clic
                projectElement.addEventListener('click', function () {
                    console.log(projectElement.id);
                    window.location.href = "data.html?id=" + projectElement.id;
                });
                projectElement.innerHTML = contenu;
                flexz[y].appendChild(projectElement);
            });
            y++;
            console.log("y apres incr", y)
            donnee.div2.forEach((element) => {
                // console.log(x);
                let projectElement = document.createElement('div');
                projectElement.id = element.id;
                projectElement.className = "projet " + element.name;

                let contenu = ""; 
                contenu += `<h2>${element.name}</h2><p>${element.description}</p>`;
                contenu += `<p>${element.outils}</p>`

                // Ajouter un gestionnaire d'événements clic
                projectElement.addEventListener('click', function () {
                    console.log(projectElement.id);
                    window.location.href = "data.html?id=" + projectElement.id;
                });
                projectElement.innerHTML = contenu;
                flexz[y].appendChild(projectElement);
            });
            y++;
            console.log("y =", y);
        })
    });



//changement de taille de planete au clic
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
