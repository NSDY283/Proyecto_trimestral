const containerCards = document.getElementById('main-market');
const selectProducts = document.getElementById('select-products');
const tabla = document.getElementById('container-table')
const button = document.createElement("button");

const total = document.querySelector('.fila55')

const cerrar = document.querySelector('.close');
const abrirM = document.querySelector('#btn-cart');
const modal = document.querySelector('.modal');
const modalc = document.querySelector('.modal-container');

let imgSelected = " ";
let idProduct = 0;
const modalProduct = document.querySelector(".modal-product")
const modal2 = document.querySelector('.modal2');
const closeModal = document.getElementById("close2")
const newProduct = document.getElementById("new-product")
const newPrice = document.getElementById("new-price")
const newImage = document.getElementById("new-image")
const btnNewProduct = document.getElementById("btn-new-create")
const btnCreate = document.getElementById("btn-create")
const newCategorie = document.getElementById("new-categorie")

const filterPrice = document.getElementById('filterPrice');
const filterCat = document.getElementById('filterCategories');


window.addEventListener('load', listSelect);
selectProducts.addEventListener('change', renderCards);

abrirM.addEventListener('click',fAbrir);
cerrar.addEventListener('click',fCerrar);

filterPrice.addEventListener('change', filterPrecios);
filterCat.addEventListener('change', filterCategories);

btnCreate.addEventListener('click',fAbrir2);
closeModal.addEventListener('click',fCerrar2);
btnNewProduct.addEventListener('click',createNewProduct); 
newImage.addEventListener('change',importImg); 

function importImg(event) {
  const currentImg = event.target.files[0];
  const objectURL = URL.createObjectURL(currentImg);
  imgSelected = objectURL;
}

function createNewProduct() {

  idProduct++;

  const titleProduct = newProduct.value;
  const priceProduct = newPrice.value;
  const catProduct = newCategorie.value;
  const id = idProduct;

  const newProduct2 = {id: id, name: titleProduct, price: priceProduct, img: imgSelected, categoria: catProduct}

  products.push(newProduct2)
  listSelect()
  modal2.classList.toggle('modal-close2');
  setTimeout(function(){
      modalProduct.style.opacity ="0"
      modalProduct.style.visibility ="hidden"
  },400)

}

function filterPrecios(event) {
  const responseFilter = event.target.value === "10.000 a 20.000"
  ? products.filter ( product => product.price > 10000 && product.price <= 20000)

  : event.target.value === "21.000 a 30.000"
  ? products.filter ( product => product.price > 21000 && product.price <= 30000)

  : event.target.value === "31.000 a 40.000"
  ? products.filter ( product => product.price > 31000 && product.price <= 40000)

  : event.target.value === "41.000 a 50.000"
  ? products.filter ( product => product.price > 41000 && product.price <= 50000)

  : event.target.value === "Mayor a 51.000"
  ? products.filter ( product => product.price > 51000)
  : null;


  containerCards.innerHTML = '';
  responseFilter.map(product => createCards(product));
}

function filterCategories(event) {
  const responseFilter = event.target.value === "Tops"
  ? products.filter ( product => product.categoria === "Tops")

  : event.target.value === "Cardigan"
  ? products.filter ( product => product.categoria === "Cardigan")

  : event.target.value === "Peluches"
  ? products.filter ( product => product.categoria === "Peluches")

  : event.target.value === "Accesorios"
  ? products.filter (product => product.categoria === "Accesorios")
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
    btnAdd.textContent = "Add to Bag";


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

    btnAdd.textContent = "Se añadió a la bolsa" 

    const hilera = document.createElement("tr");
    const borrarp = document.createElement("td");
    const borrar = document.createElement("button");
    const imagen = document.createElement("td");
    const imagenp = document.createElement("img");
    const tableProducts = document.createElement("td");
    const productPrice = document.createElement("td");
    const countProduct = document.createElement("td");
    const totalPagar = document.createElement("p");
    const countProductp = document.createElement("p");
    const resta = document.createElement("button");
    const suma = document.createElement("button");

    imagenp.setAttribute('src', img);
    
    hilera.appendChild(borrarp);
    borrarp.appendChild(borrar);
    hilera.appendChild(imagen);
    imagen.appendChild(imagenp);
    hilera.appendChild(tableProducts);
    hilera.appendChild(productPrice);
    hilera.appendChild(countProduct);
    tabla.appendChild(hilera);
    countProduct.appendChild(resta);
    countProduct.appendChild(countProductp);
    countProduct.appendChild(suma);

    borrar.innerHTML = '<i class="fas fa-trash-alt"></i>'

    resta.textContent = "-"
    suma.textContent = "+"

    imagenp.textContent = product.img;
    // imagenp.textContent = imgCard;
    tableProducts.textContent = name;
    productPrice.textContent = price;
    countProductp.textContent = 1;
    totalPagar.textContent = price;

    productPrice.classList.add("price");
    tableProducts.classList.add("product");
    countProduct.classList.add("count");
    countProductp.classList.add("countp");
    imagenp.classList.add("imagenp");
    imagen.classList.add("imagen");
    suma.classList.add("suma");
    resta.classList.add("resta");
    borrar.classList.add("borrar");
    borrarp.classList.add("borrarp");

    borrar.addEventListener('click', borrarA)

    function borrarA() {

      btnAdd.textContent="Add to Bag";

      hilera.removeChild(imagen);
      hilera.removeChild(tableProducts);
      hilera.removeChild(countProduct);
      hilera.removeChild(productPrice);
      hilera.removeChild(borrarp);

    }

    document.getElementById('tabla1').style.display = 'block';

    suma.addEventListener("click", prestoSuma)
    resta.addEventListener("click", prestoResta)
    
    // let contadoro = 0;
    
    let contador = 1;
    // let contadorp = price;
    function prestoSuma(){


      contadorp = contadorp + contador * price;

      contador = contador + 1;

      countProductp.textContent = contador;
      
      totalPagar.textContent = contadorp;
    }

    // let contador = 1;
    let contadorp = price;
    function prestoResta(){


      contadorp = contadorp - contador  * price;

      contador = contador - 1;

      countProductp.textContent = contador;
      
      totalPagar.textContent = contadorp * -1
    }

    let contadorS = contador;

    let contadorR = contador;

    let contadorTotal = contadorR + contadorS;

    total.textContent = contadorTotal;
  }
}

function fAbrir(e) {
  e.preventDefault();
  modalc.style.opacity ="1"
  modalc.style.visibility ="visible"
  modal.classList.toggle ("modal-close");
}

function fCerrar() {
  modal.classList.toggle('modal-close');
  setTimeout(function(){
      modalc.style.opacity ="0"
      modalc.style.visibility ="hidden"
  },400)
}

function fAbrir2(e) {
  e.preventDefault();
  modalProduct.style.opacity ="1"
  modalProduct.style.visibility ="visible"
  modal2.classList.toggle ("modal-close2");
}

function fCerrar2() {
  modal2.classList.toggle('modal-close2');
  setTimeout(function(){
      modalProduct.style.opacity ="0"
      modalProduct.style.visibility ="hidden"
  },400)
}




