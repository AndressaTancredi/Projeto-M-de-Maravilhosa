
const button = document.querySelector(".botao");

button.addEventListener("click", (evento) => {
    evento.preventDefault();
    console.log("Botão Funciona!");
    const nome = document.querySelector(".nome").value;
    const imagem = document.querySelector(".imagem").value;
    
fetch('http://localhost:5001/maravilhosas/',{
    method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ //Transforma o JSON em string
            'title': nome,
            'metadata': {
                'image': {
                    'url': imagem,
                }
            },
        }) 
        
    })
.then(function(response){
    return response.json();
})
})

const box = document.querySelector(".maravilhosas__box");

fetch('http://localhost:5001/maravilhosas/')
    .then((response) => {
        console.log(response);
        return response.json();
})
.then((data) => {

    data.content.forEach(mulher => {

        let perfil = document.createElement("div");
        perfil.setAttribute("class", "maravilhosas__perfil");
        box.appendChild(perfil);

        let container = document.createElement('a');
        container.setAttribute("href", "#"); //href para link e # para deixar o link vaxio por enquanto.
        perfil.appendChild(container);

        const img = document.createElement('img');
        img.setAttribute("class", 'img-responsive')

        if (mulher.metadata) {
            if (mulher.metadata.image) {
                if(mulher.metadata.image.url){
                    img.setAttribute('src', mulher.metadata.image.url);
                }
            }else{
                img.setAttribute('src', './img/img-mulher.png');
            }
        }else{
            img.setAttribute('src', './img/img-mulher.png');
        }   
        container.appendChild(img); 

        let name = document.createElement('p');
        name.textContent = mulher.title;
        container.appendChild(name);
        
        const botao = document.createElement ("button");
        botao.setAttribute("data-id", "i");
        botao.innerHTML = "X"
        perfil.appendChild(botao);

        botao.addEventListener("click", (evento) => {

        const thisCard = botao.parentElement;
        const cardPai = thisCard.parentElement;

        console.log("Este Botão Funciona Também!");

        fetch ( 'http://localhost:5001/maravilhosas/' + mulher.id, {
                    method: "DELETE",
                    headers:{
                        'Accept': "application/json",
                        'Content-Type': "application/json"
                    },
                })
                .then(() =>{
                    cardPai.removeChild(thisCard)
                })
        })
});
})
.catch(function(erro){
    console.log(erro) 
})
