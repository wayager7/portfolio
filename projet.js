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
            if (data["video"]) {
                imageElement.innerHTML += '<iframe width="560" height="315" class="video" src="' + data["video"] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
            } else {
            imageElement.innerHTML += "<p>Image non disponible<br>désolé ;p<br>cela dit, si vous etes interessé, vous pouvez me contacter pour en savoir plus...</p>";
            }
        }
        //son
        if (data["son"]) {
            imageElement.innerHTML += "<audio controls> <source src=" + data["son"] +" type='audio/mpeg' alt='image projet' ></audio>";
        }
        //video
       


        //titre
        document.querySelector('body .projet .details').innerHTML += "<h1 class='name'>" + data["name"] + "</h1>"
        //description
        document.querySelector('body .projet .details').innerHTML += "<div class='texte'><p>" + data["description"] + "</p></div><br>"
        //roles
        if (data["mon role"]) {
            document.querySelector('body .projet .details').innerHTML += "<p class='roles'> dans ce projet, j'ai été " + data["mon role"] + "</p>"
        }



        //membres
        if (data["membres"]) {
            if (Array.isArray(data["membres"])) {
                document.querySelector('body .projet .details').innerHTML += "<p>j'ai pu travailler avec</p>";
                data["membres"].forEach((membres) => {
                    document.querySelector('body .projet .details').innerHTML += "<ul>";
                    document.querySelector('body .projet .details ul').innerHTML += "<li><a href=" + membres.lkdn + ">" + membres.name + "</a><br>" + membres.role + "</li>";
                });
            } else {
                let membre = data["membres"];
                document.querySelector('body .projet .details').innerHTML += "<p>j'ai pu travailler avec <a href=" + membre.lkdn + ">" + membre.name + "</a> qui a été " + membre.role +"</p><br>";
            }
        }

        //liens
        if (data["url"]) {
            document.querySelector('body .projet .details').innerHTML += "<a href=" + data["url"] + ">" + "voir le projet </a>"
        }

        //outils
        if (data["outils"]) {
            document.querySelector('body .projet .details').innerHTML += "<br><p>outils utilisés " + data["outils"] + "</p>"
        }
        
        
        
        // for (const i in data["technos"]) {
        //         const techno = data["technos"][i];
        //         const lien_techno = data["links"][i];
        //         console.log(lien_techno)
        //         // document.querySelector('.technos').innerHTML += "<a href=" + lien_techno + "><img src=" + techno + " alt='image techno'></a><br>"
        // }
        
        
    });