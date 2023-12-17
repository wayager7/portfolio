let url = window.location.toString().split('=')[1]
console.log(url)
let data;

fetch('projet.json')
    .then((response) => response.json())
    .then((json) => {
        
        let data = json;
        data = data[url];
        console.log(json)
        console.log(data)
        let imageElement = document.querySelector('body .projet .image');
        
        //image
        console.log(data["image"])
        if (data["image"]) {
            if (Array.isArray(data["image"])) {
                data["image"].forEach((image) => {
                    imageElement.innerHTML += "<img src=" + image +" alt='image projet' >";
                });

            } else {
                imageElement.innerHTML += "<img src=" + data["image"] +" alt='image projet' >";
                document.querySelector('body .image').style.overflow = "hidden";
                // document.querySelector('body .image').style.displey = "flex"
            }
        } else {
            imageElement.innerHTML += "<p>Image non disponible<br>désolé ;p<br>cela dit, si vous etes interessé, vous pouvez me contacter pour en savoir plus...</p>";
        }

        //son
        if (data["son"]) {
            imageElement.innerHTML += "<audio controls> <source src=" + data["son"] +" type='audio/mpeg' alt='image projet' ></audio>";
        }
        
        //titre
        document.querySelector('body .projet .details').innerHTML += "<h1 class='name'>" + data["name"] + "</h1>"
        
        //description
        document.querySelector('body .projet .details').innerHTML += "<div class='texte'><p>" + data["description"] + "</p></div>"

        //roles
        if (data["mon role"]) {
            document.querySelector('body .projet .details').innerHTML += "<p class='roles'> dans ce projet, j'ai été " + data["mon role"] + "</p>"
        }
        //membres
        if (data["membres"]) {
            if(data["membres"]>1) {
                document.querySelector('body .projet .details').innerHTML += "" + data["membres"] + ""
            }else{
                document.querySelector('body .projet .details').innerHTML += "<a href=" + data["url"] + ">" + data["membres"] + "</a>"
            }
        }

        //liens
        document.querySelector('body .projet .details').innerHTML += "<a href=" + data["url"] + ">" + "voir le projet </a>"
        
        //outils
        
        
        
        // for (const i in data["technos"]) {
        //         const techno = data["technos"][i];
        //         const lien_techno = data["links"][i];
        //         console.log(lien_techno)
        //         // document.querySelector('.technos').innerHTML += "<a href=" + lien_techno + "><img src=" + techno + " alt='image techno'></a><br>"
        // }
        
        
    });