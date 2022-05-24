const main = document.getElementById('main-market')
const selectProducts = document.getElementById('select-products')
const tabla = document.getElementById('container-table')

window.addEventListener('load', loadSelect);
selectProducts.addEventListener('change', elementSelected);

function elementSelected(event) {
    // 1. Recorrer el array
    products.map(element => {
      if (event.target.value === element.name) {
        nameProduct = element.name
        imgProduct = element.img
        priceProduct = element.price
        idProduct = element.id
      }
    })
    createCard(nameProduct, imgProduct, priceProduct, idProduct)
  }

  function loadSelect() {
    products.map(element => {
      const opt = document.createElement('option');
      opt.textContent = element.name;
      opt.value = element.name;
      selectProducts.appendChild(opt);
      document.getElementById('tabla1').style.display = 'none';
    })
    
}

function createCard(nameProduct, imgProduct, priceProduct, idProduct) {
  const button2 = document.createElement('button')
  const card = document.createElement('div');
  const imgCard = document.createElement('img');
  const title = document.createElement('h3');
  const price = document.createElement("p");
  const button = document.createElement("button");
  // const tabla   = document.createElement("table")
  // const tblBody = document.createElement("tbody")
  // card.setAttribute("title", nameProduct)
  imgCard.setAttribute('src',imgProduct);
  imgCard.setAttribute('alt',nameProduct);
  title.textContent = nameProduct;
  price.textContent = priceProduct;
  button.textContent = "Añadir al carrito"
  button2.textContent = "X"
  card.appendChild(button2)
  card.appendChild(imgCard);
  card.appendChild(title);
  card.appendChild(price);
  main.appendChild(card);
  card.appendChild(button);
  button.classList.add("buttonAdd");
  card.classList.add("cardPrueba");
  imgCard.classList.add("img-card");
  title.classList.add('title-card')
  button2.classList.add('eliminar')
  price.classList.add('p-price')
  button2.addEventListener("click", element => {main.removeChild(card)});
  // button.addEventListener("click", agregar)
  //   card.classList.remove("cardPrueba")
  
  const compras = [];
  
  const agregar = () =>{
    compras.push(idProduct)
  }
  
  button.addEventListener("click", carrito);
  
  function carrito() {
    // let contador = 0;
    // let prestoPide= priceProduct;
    // contador = contador + 1;
    // agregar();
    // console.log(compras, contador);

    const hilera = document.createElement("tr");
    const tableProducts = document.createElement("td");
    const productPrice = document.createElement("td");
    const countProduct = document.createElement("td");
    const prestoPaga = document.createElement("td");
    const prestoPagap = document.createElement("p");
    const countProductp = document.createElement("p");
    const resta = document.createElement("button");
    const suma = document.createElement("button");

    // celda.appendChild(textoCelda);
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

    tableProducts.textContent = nameProduct;
    productPrice.textContent = priceProduct;
    countProductp.textContent = 1;
    prestoPagap.textContent = priceProduct;

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
      let contadorp = priceProduct;


      contadorp = contadorp + contador * priceProduct;

      contador = contador + 1;

      countProductp.textContent = contador;
      
      prestoPagap.textContent = contadorp;
    }

    // let contador = 1;
    function prestoResta(){
      let contadorp = priceProduct;


      contadorp = contadorp - contador  * priceProduct;

      contador = contador - 1;

      countProductp.textContent = contador;
      
      prestoPagap.textContent = contadorp * -1
    }
  }
}


// products.map(element=>{ console.log(element.name)});