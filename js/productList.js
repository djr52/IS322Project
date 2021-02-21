
var mockDatabase = [
    { _id: '123', title: 'Persona 5 Royal', price: 59.99, img: 'assets/p5r.jpg'},
    { _id: '583', title: 'Valheim', price: 19.99, img: 'assets/valheim.jpg' },
    { _id: '954', title: 'Halo 3', price: 29.99, img: 'assets/1200px-Halo3coverart.JPG'},
    { _id: '384', title: 'Halo 2', price: 19.99, img: 'assets/halo2cover.jpg'},
    { _id: '183', title: 'Halo 3: ODST', price: 14.99, img: 'assets/Halo_3_ODST_Box_Art.png'},
    { _id: '007', title: "Demon's Souls", price: 59.99, img: 'assets/220px-Demons_Souls_remake_cover_art.jpg' },
    { _id: '304', title: 'Bloodborne', price: 39.99, img: 'assets/bloodborne-cover-art.jpg' },
    { _id: '729', title: 'Titanfall 2', price: 19.99, img: 'assets/220px-Titanfall_2.jpg'},
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
    });
}

renderCards(mockDatabase);

//Used to sort items within the mock database
function orderBy(sortValue) {
    var sortedResults = (sortValue === 'title') ?
        mockDatabase.sort(function (a, b) {
            var titleA = a.title.toUpperCase();
            var titleB = b.title.toUpperCase();
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }
        }) :
        mockDatabase.sort(function (a, b) {

            return a[sortValue] - b[sortValue];
        });
    renderCards(sortedResults);
}
document.querySelector('#orderBy').addEventListener('change', function(event){
    var value = event.target.value;
    orderBy(value);
});


//Used to filter items within the mock database
function togglePrice(showPrice) {
    var filteredResults = (showPrice === 'below30') ?
        mockDatabase.filter(function(result){
            return result.price < 30;
        }) :
        mockDatabase.filter(function(result){
            return result.price > 30;

    });

    renderCards(filteredResults);
}
document.querySelector('#filters').addEventListener('change', function(event){
    var value = event.target.value;
    togglePrice(value);
});
