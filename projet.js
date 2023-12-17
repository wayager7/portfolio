let url = window.location.toString().split('=')[1]
console.log(url)
let data;

fetch('projet.json')
    .then((response) => response.json())
    .then((json) => {
        let data = json;
        data = data[url];
        console.log(data)
        document.querySelector('body .projet .image').innerHTML += "<img src=" + data["image"] +" alt='image projet' >"
        document.querySelector('body .projet .details').innerHTML += "<h1 class='name'>" + data["name"] + "</h1>"
        document.querySelector('body .projet .details').innerHTML += "<div class='texte'><p>" + data["description"] + "</p></div>"
        document.querySelector('body .container .texte').innerHTML += "<a href=" + data["url"] + ">" + "voir le projet </a>"
        // for (const i in data["technos"]) {
        //         const techno = data["technos"][i];
        //         const lien_techno = data["links"][i];
        //         console.log(lien_techno)
        //         // document.querySelector('.technos').innerHTML += "<a href=" + lien_techno + "><img src=" + techno + " alt='image techno'></a><br>"
        // }
        
        
    });