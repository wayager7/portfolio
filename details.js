

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
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data[0].div1.forEach(element => {
            let contenu = "";
            contenu += `<div class='projet' id=${element.name}><a href="#"><h2>${element.name}</h2><p>${element.description}</p>`;
            // if (element.membres.length > 0) {
            //     element.membres.forEach(membre => {
            //         contenu += `<a href="${membre.lkdn}">${membre.name}</a>`;
            //     });
            // }
            contenu += `<p>${element.outils}</p>`
            contenu += `</a></div>`;
            codeDiv.innerHTML += contenu;
        });
        data[0].div2.forEach(element => {
            let contenu = "";
            contenu += `<div class='projet' id=${element.name}><h2>${element.name}</h2><p>${element.description}</p>`;
            // if (element.membres.length > 0) {
            //     element.membres.forEach(membre => {
            //         contenu += `<a href="${membre.lkdn}">${membre.name}</a>`;
            //     });
            // }
            contenu += `<p>${element.outils}</p>`
            contenu += `</div>`;
            sonsDiv.innerHTML += contenu;
        });
    })
    .catch(error => console.error('Erreur attrapée :', error));



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


//
function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}
//si j'ajoute "?test=Hello, World!" en fin d'url 
//j'ai ce resultat "/?test=Hello,%20World!"
var deco_var = decodeURI( $_GET( 'test' ) );
