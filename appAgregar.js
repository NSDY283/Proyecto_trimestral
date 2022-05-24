const main = document.getElementById('main-market');
const selectProducts = document.getElementById("select-products");
const btncreateNew = document.getElementById("createNew");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const newProduct = document.getElementById("newProduct");
const newprice = document.getElementById("newprice");
const newImeg = document.getElementById("newImeg");
const btnNewAdd = document.getElementById("btnNewAdd");
let imgselected = " ";
let idProduct = 0;


window.addEventListener('load', loadSelect);
selectProducts.addEventListener('change', elementSelected);
btncreateNew.addEventListener("click",createModal);
window.addEventListener('load', loadp);
btnNewAdd.addEventListener("click",agregarProduct);
newImeg.addEventListener("change",importImg);

function importImg (event){
  const currentImg = event.target.file[0];
  const odjectURL = URL.createObjectURL(currentImg);
  imgselected = odjectURL;
}

function agregarProduct (){
    idProduct++;
    const titleProduct = newProduct.value;
    const priceProduct = newprice.value;
    const id = idProduct;

    const newProducts = {id: id, name: titleProduct, price: priceProduct,img: imgselected};
    products.push(newProducts);
    loadSelect();
    modal.style.display = "none"
}

function loadp (){
    modal.style.display = 'none';
}


function createModal (){
  modal.style.display = 'block';
 
}

function elementSelected(event) {
  // 1. Recorrer el array
  products.map(element => {
    if (event.target.value === element.name) {
        imgProduct = element.img
        nameProduct = element.name
        priceProduct = element.price
    }
  })
  createCard(nameProduct, imgProduct, priceProduct)
}

function loadSelect() {

  products.map(element=>{
    const opt = document.createElement('option');
    opt.textContent = element.name;
    opt.value = element.name;
    selectProducts.appendChild(opt);
  });    
}

function createCard(nameProduct, imgProduct, priceProduct) {
  const card = document.createElement('div');
  const imgCard = document.createElement('img');
  const title = document.createElement('h3');
  const price = document.createElement("p");
  const button = document.createElement("button")
  const button2 = document.createElement("button")
  imgCard.setAttribute('src',imgProduct);
  imgCard.setAttribute('alt',nameProduct);
  title.textContent = nameProduct;
  price.textContent = priceProduct;
  button.textContent = "Añadir al carrito"
  button2.textContent = "X"
  card.appendChild(button2);
  card.appendChild(imgCard);
  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(button)
  main.appendChild(card);

  button2.classList.add("btn-del");
  card.classList.add("cardPrueba");
  button.classList.add("btn-add");
  imgCard.classList.add("img-card");
  button2.addEventListener("click", element => {main.removeChild (card)});
}