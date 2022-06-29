const products = [
    {id: 1, name: 'buzo verde menta panda', price: 100,img: 'https://http2.mlstatic.com/D_646164-MCO43632973688_092020-O.jpg'},
    {id: 2, name: 'buzo gris escandalosos', price: 200,img: 'https://http2.mlstatic.com/D_889173-MCO46521193000_062021-O.jpg'},
    {id: 3, name: 'buzo blanco pardo', price: 300,img: 'https://http2.mlstatic.com/D_812865-MCO45660295050_042021-O.jpg'},
    {id: 4, name: 'gorra blanca escandalosos', price: 400,img: 'https://www.abnormalshop.com/wp-content/uploads/2020/11/Cycle-Gorra-Trucker-Osos-Escandalosos-700x700.jpg'},
    {id: 5, name: 'pijama escandalosos', price: 500,img: 'https://http2.mlstatic.com/D_NQ_NP_987032-MLM43840007604_102020-W.jpg'},
    {id: 6, name: 'buzo blanco corto escandalosos', price: 600,img: 'https://i.linio.com/p/c2524decb60a331df40347e333b2ceab-product.jpg'},
    {id: 7, name: 'buzo blanco corto cremallera escandalosos', price: 700,img: 'https://klixmant.com/wp-content/uploads/2017/12/j.balvin-osos-escandalosos-.jpg'},
    {id: 8, name: 'zapatos escandalosos', price: 800,img: 'https://m.media-amazon.com/images/I/811NLjPwKVL._AC_UL320_.jpg'},
    {id: 9, name: 'pantuflas escandalosos', price: 900,img: 'https://i.pinimg.com/originals/e8/da/88/e8da8864a41853fe778dfccc87630036.jpg'},
    {id: 10, name: 'medias escandalosos', price: 1000,img: 'https://m.media-amazon.com/images/I/51nqFvthxfL._AC_SX679_.jpg'},
    {id: 11, name: 'pijama rosada escandalosos', price: 1100,img: 'https://http2.mlstatic.com/D_NQ_NP_866183-MCO40966561990_032020-O.webp'},
    {id: 12, name: 'medias escandalosos', price: 1200,img: 'http://http2.mlstatic.com/D_884518-MCO45280098035_032021-O.jpg'},
    {id: 13, name: 'blusa blanca escandalosos', price: 1200,img: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/108121107_114817900308761_2398859325870074767_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=973b4a&_nc_ohc=bq93YlRAUWYAX_9OpVA&_nc_ht=scontent-mia3-2.xx&oh=00_AT8GKW7Hj6aAdZbL1721Tgt3EuihjEIOZzv_LJlNotHGQw&oe=629A01E4'},
    {id: 14, name: 'blusa gris escandalosos', price: 1200,img: 'https://ih1.redbubble.net/image.1297451406.9312/ssrco,classic_tee,womens,denim_heather,front_alt,square_product,600x600.jpg'},
  ];
    newArray =[];

  function filtarXLetra(letra) {
    newArray = products.filter(product => product.name.charAt(3) === letra);
    return newArray;      
  }

  console.log(filtarXLetra('a'));

//   products.filter((producto) =>{
//       if(producto.name.charAt(3) === 'o'){
//           console.log(products.push(newarray));
//       }else{
//           console.log("no pertenece")
//       }
//   })