let url = window.location.toString().split('=')[1]
let data;

fetch('data.json')
    .then((response) => response.json())
    .then((json) => {
        let data = json;
        data = data[url]

        // document.querySelector('.image_projet').innerHTML += "<img src=" + data["image"] +" alt='image projet'><br>"
        // document.querySelector('body .container .texte').innerHTML += "<h1>" + data["titre"] + "</h1><br>"
        // document.querySelector('body .container .texte').innerHTML += "<p>" + data["description"] + "</p><br>"
        // document.querySelector('body .container .texte').innerHTML += "<a href=" + data["lien"] + ">" + data["lien"] + "</a><br>"
        // for (const i in data["technos"]) {
        //         const techno = data["technos"][i];
        //         const lien_techno = data["links"][i];
        //         console.log(lien_techno)
        //         // document.querySelector('.technos').innerHTML += "<a href=" + lien_techno + "><img src=" + techno + " alt='image techno'></a><br>"
        // }
        
        
    });