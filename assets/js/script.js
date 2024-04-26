let urlApi = "https://jsonplaceholder.typicode.com/posts";
let btnPost = document.getElementById("traerPost");

const getData = async (url) => {

    try {
        let response = await fetch(url);
        let data = await response.json();
        return data

    } catch (error) {
        console.error("Llamada a la api fallido", error);
        return "Llamada a la api fallido"

    }
}

const agregarPost = (listado) => {
    let elementoLista = "";
    listado.forEach(post => {
        elementoLista += `<li class="py-2"><strong>${post.title}</strong> <p>Post: <em>${post.body}</em></p></li>`
    })
    document.getElementById("post-data").innerHTML = elementoLista;
}

const main = async () => {
    let datos = await getData(urlApi);
    agregarPost(datos);
}

btnPost.addEventListener("click", function(){
    main();
})
