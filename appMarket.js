const containerCards = document.getElementById('main-market');
const selectProducts = document.getElementById('select-products');
const tabla = document.getElementById('container-table')
const button = document.createElement("button");

const filterPrice = document.getElementById('filterPrice')


window.addEventListener('load', listSelect);
selectProducts.addEventListener('change', renderCards);

filterPrice.addEventListener('change', filterPrecios)

function filterPrecios(event) {
  const responseFilter = event.target.value === "10000 a 20000"
  ? products.filter ( product => product.price > 10000 && product.price <= 20000)

  : event.target.value === "21000 a 40000"
  ? products.filter ( product => product.price > 21000 && product.price <= 40000)

  : event.target.value === "41000 a 50000"
  ? products.filter ( product => product.price > 41000 && product.price <= 50000)

  : event.target.value === "Mayor a 50.000"
  ? products.filter ( product => product.price > 50000)
  : null;


  containerCards.innerHTML = '';
  responseFilter.map(product => createCards(product));
}

function renderCards() {
    products.map( product => { product.name === selectProducts.value ? createCards(product) : null } );
}

function listSelect() {
    products.map( products => {
        const option = document.createElement('option');
        option.value = products.name;
        option.textContent = products.name;
        selectProducts.appendChild(option);
        createCards(products);
        document.getElementById('tabla1').style.display = 'none';
      });
    }

function createCards(product) {
  const { name, img, id, price} = product;

    const card = document.createElement('div');
    card.classList.add('cardPrueba');

    const imgCard = document.createElement('img');
    imgCard.setAttribute('src', img);
    imgCard.setAttribute('alt', img);
    `<img src=${product.img} alt="">`
    imgCard.classList.add('img-card');

    const nameCard = document.createElement('p');
    nameCard.textContent = name;
    nameCard.classList.add('title-card');

    const priceCard = document.createElement('p');
    priceCard.classList.add('p-price');
    priceCard.textContent = "$" + price;

    const btnAdd = document.createElement('button');
    btnAdd.setAttribute('id', id);
    btnAdd.classList.add('buttonAdd');
    btnAdd.textContent = "Add to Cart";


    card.appendChild(imgCard);
    card.appendChild(nameCard);
    card.appendChild(priceCard);
    card.appendChild(btnAdd);

    containerCards.appendChild(card);
  
  const compras = [];
  
  const agregar = () =>{
    compras.push(id)
  }
  
  btnAdd.addEventListener("click", carrito);
  
  function carrito() {

    const hilera = document.createElement("tr");
    const tableProducts = document.createElement("td");
    const productPrice = document.createElement("td");
    const countProduct = document.createElement("td");
    const prestoPaga = document.createElement("td");
    const prestoPagap = document.createElement("p");
    const countProductp = document.createElement("p");
    const resta = document.createElement("button");
    const suma = document.createElement("button");

    hilera.appendChild(tableProducts);
    hilera.appendChild(productPrice);
    hilera.appendChild(countProduct);
    hilera.appendChild(prestoPaga);
    tabla.appendChild(hilera);
    prestoPaga.appendChild(prestoPagap)
    countProduct.appendChild(resta);
    countProduct.appendChild(countProductp);
    countProduct.appendChild(suma);

    resta.textContent = "-"
    suma.textContent = "+"

    tableProducts.textContent = name;
    productPrice.textContent = price;
    countProductp.textContent = 1;
    prestoPagap.textContent = price;

    productPrice.classList.add("price");
    tableProducts.classList.add("product");
    countProduct.classList.add("count");
    prestoPaga.classList.add("total");
    suma.classList.add("suma");
    resta.classList.add("resta");

    document.getElementById('tabla1').style.display = 'block';

    suma.addEventListener("click", prestoSuma)
    resta.addEventListener("click", prestoResta)
    
    // let contadoro = 0;
    
    let contador = 1;
    function prestoSuma(){
      let contadorp = price;


      contadorp = contadorp + contador * price;

      contador = contador + 1;

      countProductp.textContent = contador;
      
      prestoPagap.textContent = contadorp;
    }

    // let contador = 1;
    function prestoResta(){
      let contadorp = price;


      contadorp = contadorp - contador  * price;

      contador = contador - 1;

      countProductp.textContent = contador;
      
      prestoPagap.textContent = contadorp * -1
    }
  }
}