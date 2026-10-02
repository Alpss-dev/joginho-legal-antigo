const divP = document.getElementById("catalogo"); 
const input = document.getElementById("tupi");

const produtos = [
    [
        "Freddy Fazbear Funko",
        "Boneco Funko Pop de Freddy",
        "Funko Pop",
        "R$ 450",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOgELedEgdei4F31jRD0-KfinMqZtmj0CmJvj3mTLbA&s"
    ],

    [
        "Chica Funko",
        "Boneco Funko Pop de Chica",
        "Funko Pop",
        "R$ 300",
        "https://geekfanaticos.fbitsstatic.net/img/p/funko-pop-tie-dye-chica-880-five-nights-at-freddys-fnaf-73270/259757.jpg?w=540&h=540&v=no-change&qs=ignore"
    ],

    [
        "Notebook Gamer Dell Alienware C7",
        "16GB RTX 4050 W11 - A35",
        "Notebook",
        "R$ 7.694",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fXP1ukyR6F_J69fn4rDHRIxrqfiRtjn4XX_x8xYItg&s"
    ],

    [
        "Bonnie Funko",
        "Boneco Funko Pop de Bonnie",
        "Funko Pop",
        "R$ 350",
        "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?w=500"
    ],

    [
        "Foxy Funko",
        "Boneco Funko Pop de Foxy",
        "Funko Pop",
        "R$ 380",
        "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=500"
    ],

    [
        "Golden Freddy Funko",
        "Boneco Funko Pop de Golden Freddy",
        "Funko Pop",
        "R$ 550",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_AA2R0rxTNKmLQftFb6_xMIIWCB84OR_8hWVFAkqxA&s=10"
    ],

    [
        "Mouse Gamer RGB",
        "Mouse gamer com iluminação RGB",
        "Periféricos",
        "R$ 150",
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500"
    ],

    [
        "Teclado Mecânico RGB",
        "Teclado mecânico gamer com RGB",
        "Periféricos",
        "R$ 280",
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
    ],

    [
        "Headset Gamer",
        "Headset gamer com microfone",
        "Periféricos",
        "R$ 220",
        "https://images.unsplash.com/photo-1599669454699-248893623440?w=500"
    ],

    [
        "Monitor Gamer 24",
        "Monitor gamer Full HD de 24 polegadas",
        "Monitor",
        "R$ 900",
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
    ],

    [
        "PlayStation 5",
        "Console PlayStation 5",
        "Console",
        "R$ 3.499",
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500"
    ],

    [
        "Controle Gamer",
        "Controle sem fio para videogame",
        "Acessórios",
        "R$ 300",
        "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=500"
    ]
];


input.addEventListener("input", mostrarProdutosFiltrados);


function mostrarProdutosFiltrados() {

    const valorDigitado = input.value
        .trim()
        .toLowerCase();


    divP.innerHTML = "";


    const produtosFiltrados = produtos.filter((produto) => {

        return (
            produto[0].toLowerCase().includes(valorDigitado) ||
            produto[1].toLowerCase().includes(valorDigitado) ||
            produto[2].toLowerCase().includes(valorDigitado)
        );

    });


    produtosFiltrados.forEach((produto) => {

        // Cria a div do produto
        const divF = document.createElement("div");
        divF.className = "produto";


        // Cria a imagem
        const imagem = document.createElement("img");

        imagem.src = produto[4];

        imagem.alt = produto[0];

        imagem.className = "imagem-produto";
            

        // Cria o título
        const h3 = document.createElement("h3");

        h3.textContent = produto[0];


        // Cria a descrição
        const p = document.createElement("p");

        p.textContent = produto[1];


        // Cria a categoria
        const p2 = document.createElement("p");

        p2.textContent = produto[2];


        // Cria o preço
        const p3 = document.createElement("p");

        p3.textContent = produto[3];


        // Coloca tudo dentro da div
        divF.appendChild(imagem);

        divF.appendChild(h3);

        divF.appendChild(p);

        divF.appendChild(p2);

        divF.appendChild(p3);


        // Coloca o produto dentro do catálogo
        divP.appendChild(divF);

    });

}
mostrarProdutosFiltrados();
