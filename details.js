

const planete = document.querySelector('.planete');
// Obtenez les styles calculés pour l'élément '.planete'
const computedStyles = window.getComputedStyle(planete);
// Récupérez la valeur de la largeur et stockez-la dans une constante
const initialWidth = computedStyles.width;
console.log("initialWidth : " + initialWidth);

const codeDiv = document.querySelector('#code .flexzone');
const sonsDiv = document.querySelector('#sons .flexzone');
const graphDiv = document.querySelector('.graph');
const designDiv = document.querySelector('.design');
const videoDiv = document.querySelector('.video');
const threeDiv = document.querySelector('.three');
// const div = document.createElement('div');

//creer une variable contenue que je vais remplir au fur et a mesure de donnée provenant de mon json pour tout mettre directement dans une balise class "flexzone"
let keys;
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data[0].div1.forEach(element => {
            

            // let data = json;
            keys = Object.keys(data)
            console.log(keys)
            console.log(element)
            console.log(data)
            let flexz = document.querySelector('.contenu .flexzone');
            let contenu = "";
            contenu += `<h2>${element.name}</h2><p>${element.description}</p>`;
            contenu += `<p>${element.outils}</p>`
            keys.forEach(function (key) {
                let projectElement = document.createElement('div');
            projectElement.className = "projet " + element.name;
            projectElement.id = key;
                // contenu += `</div>`;
                projectElement.innerHTML = contenu;
                projectElement.addEventListener('click', function () {
                    console.log(key);
                    window.location.href = "data.html?id=" + key;
                });
                flexz.appendChild(projectElement);
            });

            // let contenu = "";
            //     contenu += `<div class='projet' id=${element.name}><h2>${element.name}</h2><p>${element.description}</p>`;
            //     // let contenu = "";
            //     // contenu += `<div class='projet' id=${element.name}><h2>${element.name}</h2><p>${element.description}</p>`;
            //     // if (element.membres.length > 0) {
            //     //     element.membres.forEach(membre => {
            //     //         contenu += `<a href="${membre.lkdn}">${membre.name}</a>`;
            //     //     });
            //     // }
            //     contenu += `<p>${element.outils}</p>`
            //     contenu += `</div>`;

            
            // codeDiv.innerHTML += contenu;
        });



        // data[0].div2.forEach(element => {
        //     let contenu = "";
        //     contenu += `<div class='projet' id=${element.name}><h2>${element.name}</h2><p>${element.description}</p>`;
        //     // if (element.membres.length > 0) {
        //     //     element.membres.forEach(membre => {
        //     //         contenu += `<a href="${membre.lkdn}">${membre.name}</a>`;
        //     //     });
        //     // }
        //     contenu += `<p>${element.outils}</p>`
        //     contenu += `</div>`;
        //     sonsDiv.innerHTML += contenu;
        // });
    })
    // .catch(error => console.error('Erreur attrapée :', error));




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





// // test
// fetch('data.json')
//     .then((response) => response.json())
//     .then((json) => {
//         let data = json;
//         keys = Object.keys(data)
//         console.log(keys)
//         let projectContainer = document.querySelector('#projects .content');


//         keys.forEach(function (key) {
//             let projectElement = document.createElement('div');
//             projectElement.classList.add('project-box');
//             projectElement.id = key;
//             console.log(key);
//             projectElement.style.backgroundImage = "url('" + data[key].image + "')";
//             projectElement.style.borderColor = data[key].couleur  
                    
//             // Ajouter un gestionnaire d'événements clic
//             projectElement.addEventListener('click', function () {
//                 console.log(key);
//                 window.location.href = "projet.html?id=" + key;
//             });

//             projectContainer.appendChild(projectElement);
//         });
//     });