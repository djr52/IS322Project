
var imgSrc = new Image();
var mockDatabase = [
    { _id: '123', title: 'Persona 5 Royal', price: 4.99, img: 'assets/p5r.jpg'},
    { _id: '583', title: 'Item 2', price: 5.99, img: '' },
    { _id: '954', title: 'Item 3', price: 14.99, img: ''},
    { _id: '384', title: 'Item 4', price: 12.50, img: ''},
    { _id: '183', title: 'Item 5', price: 9.99, img: ''},
    { _id: '007', title: 'Item 6', price: 19.99, img: '' },
    { _id: '304', title: 'Item 7', price: 49.99, img: '' },
    { _id: '729', title: 'Item 8', price: 99.99, img: ''},
    { _id: '734', title: 'Item 9', price: 24.99, img: ''},
];

function renderCards (results){
    var listBody = document.querySelector('#card-container');
    var img = document.getElementsByTagName("img");


    listBody.innerHTML = '';

    var cardRows = results.map(function (result) {


        return '<div class="card">' + '<img id="productImg" src="" class="card-img-top" alt="">' +'<div class="card-body"><h5 class="card-title">' + result.title + '</h5><p class="card-text">'
            + result.price + '</p></div></div>';
    });

    //document.getElementById("#productImg").setAttribute('alt', results._id);

    cardRows.forEach(function (card, index) {

        listBody.innerHTML += card;
        img[index].alt = results[index]._id;
        img[index].src = results[index].img;
        console.log(img[index]);
    });



}
renderCards(mockDatabase);
